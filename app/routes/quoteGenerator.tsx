import { useState, useEffect, useRef } from 'react';

import OpenAI from "openai";
import { QuoteCard } from '~/components/QuoteCard';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const environmentVariables = {
    API_URL: process.env.OPENAI_API_KEY,
  };
  return json({ environmentVariables });;
};

const quoteGenerator = () => {
    const data: any = useLoaderData();
    const regenerateRef = useRef(null);
    const [quotes, setQuotes] = useState<string>('');
    const [quotesPicture, setQuotesPicture] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const openai = new OpenAI({ apiKey: data.environmentVariables.API_URL, dangerouslyAllowBrowser: true });
    const generateQuoteAndPic = async () => {
      console.log("generateQuote")
      setIsLoading(true);
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "generate a positive quote for me" }],
        model: "gpt-3.5-turbo",
      });
      completion.choices[0].message.content && setQuotes(completion.choices[0].message.content.toString());

      console.log("choice: ");
      console.log(completion.choices);
      await generatePicture();
    }

    const generatePicture = async () => {
      console.log("generateQuotePicture")
      const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: "provide me a picture without text that suit best for this quote " + quotes,
        n: 1,
        size: "1024x1024",
      });
      response.data[0]?.url && setQuotesPicture(response.data[0].url);
      setIsLoading(false);
      console.log("image: ")
      console.log(response);
    }

    useEffect(()=> {
      generateQuoteAndPic();
    },[])

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-green-300'>
      <button ref={regenerateRef}
          className='mb-8 mx-5 w-48 h-16 bg-gradient-to-r from-teal-200 to-lime-200 rounded-lg cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#ffffff,5px_10px_0_0_#ffffff]
            border-b-[1px] border-blue-400'
          onClick={generateQuoteAndPic}>
          Regenerate a Quote for the day.
      </button>
      <QuoteCard quotes={quotes} quotesPicture={quotesPicture} isLoading={isLoading}/>
    </div>
  );
}

export default quoteGenerator;