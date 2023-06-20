interface ThemeItemProps {
    color: string;
    img: string;
    changeColor: any
}

const ThemeItem: React.FC<ThemeItemProps> = ({ color, img, changeColor }) => {
    return <img src={img} alt="" className='theme__img' onClick={() => 
    {changeColor(color)}} />;
};

export default ThemeItem;
