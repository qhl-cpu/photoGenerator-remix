import { useState, useEffect, useRef } from 'react';

import OpenAI from "openai";
import { QuoteCard } from '~/components/QuoteCard';

const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

const quoteGenerator = () => {
    const regenerateRef = useRef(null);
    const [quotes, setQuotes] = useState<string>('');
    const [quotesPicture, setQuotesPicture] = useState<string>('');

    const generateQuote = async () => {
      console.log("generateQuote")
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "generate a positive quote for me" }],
        model: "gpt-3.5-turbo",
      });
      completion.choices[0].message.content && setQuotes(completion.choices[0].message.content.toString());

      console.log("choice: ");
      console.log(completion.choices);
      await generateQuotePicture();
    }

    const generateQuotePicture = async () => {
      console.log("generateQuotePicture")
      const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: "provide me a picture without text that suit best for this quote " + quotes,
        n: 1,
        size: "1024x1024",
      });
      response.data[0]?.url && setQuotesPicture(response.data[0].url);

      console.log("image: ")
      console.log(response);
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-green-300'>
      <button ref={regenerateRef}
          className='mb-8 mx-5 w-48 h-16 bg-gradient-to-r from-teal-200 to-lime-200 rounded-lg cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#ffffff,5px_10px_0_0_#ffffff]
            border-b-[1px] border-blue-400'
          onClick={generateQuote}>
          Regenerate a Quote for the day.
      </button>
      <QuoteCard quotes={quotes} quotesPicture={quotesPicture}/>

    </div>
  );
}

export default quoteGenerator;