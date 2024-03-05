import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import './portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio__section'>
            <h2 className='section__title'>My <span>Portfolio</span></h2>

            <div className='portfolio__container container grid'>
                {portfolio.map((item) => {
                    // Verificamos si el objeto tiene 'icon' en los detalles
                    if ('icon' in item.details[0]) {
                        // Objeto con detalles que incluyen 'icon'
                        const formattedItem = {
                            ...item,
                            details: item.details.map(detail => ({
                                icon: detail.icon,
                                title: detail.title,
                                desc: detail.desc,
                            })),
                        };
                        return <PortfolioItem key={item.id} {...formattedItem} />;
                    } else {
                        // Objeto con detalles sin 'icon'
                        return <PortfolioItem key={item.id} {...item} />;
                    }
                })}
            </div>
        </section>
    )
}

export default Portfolio;
