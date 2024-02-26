
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
      <img className="w-250px pt-2" src={quotesPicture}/>
      <div className="px-2 py-4 font-bold text-white text-xl mb-2">{quotes}</div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
}
