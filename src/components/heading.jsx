export const Heading = ({text1, text2, text3, className='text-left text-(--white)'}) =>{
    return(
        <h1 className={`text-[46px] lg:text-[132px] ${className}`}
        style={{fontFamily:'qaveria'}}>
            <span className='lg:block inline-block'>{text1}</span> 
            <span className='lg:block inline-block'>{text2}</span> 
            <span className='lg:block inline-block'>{text3}</span>
        </h1>
    )
}