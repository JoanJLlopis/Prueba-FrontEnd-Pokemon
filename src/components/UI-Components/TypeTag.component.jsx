import Bug from '../../assets/TypteTags/bug.png'
import Dark from '../../assets/TypteTags/dark.png'
import Dragon from '../../assets/TypteTags/dragon.png'
import Electric from '../../assets/TypteTags/electric.png'
import Fairy from '../../assets/TypteTags/fairy.png'
import Fighting from '../../assets/TypteTags/fighting.png'
import Fire from '../../assets/TypteTags/fire.png'
import Flying from '../../assets/TypteTags/flying.png'
import Ghost from '../../assets/TypteTags/ghost.png'
import Grass from '../../assets/TypteTags/grass.png'
import Ground from '../../assets/TypteTags/ground.png'
import Ice from '../../assets/TypteTags/ice.png'
import Normal from '../../assets/TypteTags/normal.png'
import Poison from '../../assets/TypteTags/poison.png'
import Psychic from '../../assets/TypteTags/Psychic.png'
import Rock from '../../assets/TypteTags/rock.png'
import Steel from '../../assets/TypteTags/steel.png'
import Water from '../../assets/TypteTags/water.png'

const types = {
    bug:{
        iconUrl:Bug
    },
    dark:{
        iconUrl:Dark
    },
    dragon:{
        iconUrl:Dragon
    },
    electric:{
        iconUrl:Electric
    },
    fairy:{
        iconUrl:Fairy
    },
    fighting:{
        iconUrl:Fighting
    },
    fire:{
        iconUrl:Fire
    },
    flying:{
        iconUrl:Flying
    },
    ghost:{
        iconUrl:Ghost
    },
    grass:{
        iconUrl:Grass
    },
    ground:{
        iconUrl:Ground
    },
    ice:{
        iconUrl:Ice
    },
    normal:{
        iconUrl:Normal
    },
    poison:{
        iconUrl:Poison
    },
    psychic:{
        iconUrl:Psychic
    },
    rock:{
        iconUrl:Rock
    },
    steel:{
        iconUrl:Steel
    },
    water:{
        iconUrl:Water
    },
}

const TypeTag = ({type}) => {
    return (
        <div>
            <img className='w-20' src={types[type]?.iconUrl}/> 
        </div>
    );
};

export default TypeTag;