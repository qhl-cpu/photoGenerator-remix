
export type QuoteCardPropTypes = {
  quotes: string,
  quotesPicture: string
}

export const QuoteCard = ({
  quotes,
  quotesPicture
}: QuoteCardPropTypes) => {  
  return (
    <div className="max-w-sm h-[65%] rounded overflow-hidden shadow-lg flex flex-col items-center bg-white bg-opacity-30 border-[15px] border-transparent">
      <img className="w-[280px] pt-2 h-[60%]" src={quotesPicture}/>
      <div className="px-2 my-4 h-[20%] font-bold text-white text-xl">{quotes}</div>
      <div className="px-6 pt-4 h-[20%]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#winter</span>
      </div>
    </div>
  );
}
