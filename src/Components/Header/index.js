import './index.css';
import menu from '../../public/menu.png';
import question from '../../public/question.png';
import stats from '../../public/stats.png';
import settings from '../../public/settings.png';

export function Header(){
    const leftOptionstyle={
        marginLeft: '10px'
    }
    return(
        <div className="header-container"> 
            <div className="leftsideOptions">
                <div>
                    <img src={menu} alt="menu" className='icon-dimension'/>
                </div>
                <div>
                    <img src={question} alt="question"  className='icon-dimension' style={leftOptionstyle} />
                </div>
            </div>
            <div className="logo">Wordle</div>
            <div className="rightsideOptions">
                <div>
                    <img src={stats} alt="stats" className='icon-dimension'/>
                </div>
                <div>
                    <img src={settings} alt="settings" className='icon-dimension' style={leftOptionstyle}  />
                </div>
            </div>
        </div>
    )
}