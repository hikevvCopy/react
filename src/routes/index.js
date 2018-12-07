import NameList from '../components/lists/NameList.jsx';
import SeaList from '../components/lists/SeaList.jsx';
import CountryList from '../components/lists/CountryList.jsx';

export const routes = [
    {
        path: '/',
        exact: true,
        component: NameList,
    },
    {
        path: '/second',
        component: CountryList
    },
    {
        path: '/third',
        component: SeaList
    }
]