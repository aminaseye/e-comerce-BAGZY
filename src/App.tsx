

import Router from './routers/Router'

const App = () => {
  const data : any = [
    {
        id : 1,
        nameProduct : "MINIBAG CLAUDE DE LONA",
        price : 25,
        color : "cafe",
        img : '/assets/products/minibolso/MINIBOLSO1.png',
     
    },
    {
        id : 2,
        nameProduct : "GLOSS VINTAGE",
        price : 15,
        color : "brown",
        img: ""
    },
    {
        id : 3,
        nameProduct : "BANDOLERA ANAGRAM",
        price : 30,
        color : "red"
    },
    {
        id : 4,
        nameProduct : "ORAN NANOs",
        price : 100,
        color : "violet"
    },
    {
        id : 5,
        nameProduct : "Lacey",
        price : 50,
        color : "salmon",
        img : '/assets/products/bolso_coach/COACHBEIGE1.png'
    }
]

localStorage.setItem('data', JSON.stringify(data))
/*if(!localStorage.getItem('data')){
  localStorage.setItem('data', JSON.stringify(data))
}*/
  return (
    <Router />
  )
}

export default App