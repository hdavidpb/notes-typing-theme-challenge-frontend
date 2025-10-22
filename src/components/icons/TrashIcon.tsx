
interface Props {
    width?:number;
    height?:number;
    currentColor?:string
}

export const TrashIcon = ({height=20,width=20,currentColor="text-neutral-700 dark:text-neutral-0"}:Props) => {
  return (


<svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${currentColor}`}>
<path d="M12.3767 3.10358L13.0586 4.53141H15.2581C15.9343 4.53141 16.4826 5.05772 16.4826 5.70695V6.57751C16.4826 7.0214 16.1077 7.38124 15.6454 7.38124H4.17056C3.70818 7.38124 3.33334 7.0214 3.33334 6.57751V5.70695C3.33334 5.05772 3.88158 4.53141 4.55787 4.53141H6.75739L7.43922 3.10358C7.6438 2.6751 8.0898 2.40039 8.5808 2.40039H11.2351C11.7261 2.40039 12.1721 2.6751 12.3767 3.10358Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2 7.44043V14.389C15.2 15.7207 14.0895 16.8002 12.7195 16.8002H7.09717C5.72725 16.8002 4.6167 15.7207 4.6167 14.389V7.44043"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.49936 10.2529V13.8597M11.3164 10.2529V13.8597"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}
