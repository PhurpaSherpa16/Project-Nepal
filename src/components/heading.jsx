export const Heading = ({text1, text2, text3, className='text-left text-(--white) text-[46px] md:text-[132px]'}) =>{
    return(
        <h1 className={`${className}`}
        style={{fontFamily:'qaveria'}}>
            <span className='lg:block inline-block'>{text1}</span> <span className='lg:block inline-block'>{text2}</span> <span className='lg:block inline-block'>{text3}</span>
        </h1>
    )
}