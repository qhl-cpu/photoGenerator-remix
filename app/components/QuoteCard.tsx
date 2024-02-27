
export type QuoteCardPropTypes = {
  quotes: string,
  quotesPicture: string
}

export const QuoteCard = ({
  quotes,
  quotesPicture
}: QuoteCardPropTypes) => {  
  return (
    <div className="max-w-sm w-[90%] h-[65%] rounded overflow-hidden shadow-lg flex flex-col items-center bg-white bg-opacity-30 border-[15px] border-transparent">
      {quotesPicture == ''? 
        <div className="flex items-center justify-center w-[230px] h-[230px] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
        </div>
        :
      <img className="w-[230px] h-[230px] pt-2 h-[60%]" src={quotesPicture}/>
      }
      <div className="px-2 my-4  h-[30%] font-bold text-white text-xl">{quotes}</div>
      <div className="px-6 pt-4 h-[10%]">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">#winter</span>
      </div>
    </div>
  );
}
