

interface ThemeItemProps {
    color: string;
    img: string;
}

const ThemeItem: React.FC<ThemeItemProps> = ({ color, img }) => {
    return <img src={img} alt="" className='theme__img' />;
};

export default ThemeItem;
