export default ({text}) => {
	return <a href='#' className="group py-8 relative">
    <span className="group-hover:bg-orange-primary">{text}</span>
    <span className="block w-full h-[2px] group-hover:bg-orange-primary left-0 absolute bottom-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
  </a>
};