
//React.useEffect(()=> some logic, [depebdebcies array])
// if a state e.g counter with useEffect without the array it will re-render infinete amount of times, while having the array set
// it knows whether it should run the effect or not
/*
1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data,
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function









const [things, setThings] = React.useState( ["Thing 1", "Thing 2"])
function addItem() {
  newThing = `Thing ${things.length+1}`
  setThings(prevState => [...prevState, newThing])
}
const [counter, setCounter] = React.setState(0);

function add(){
  setCounter(prevValue => prevValue + 1) best practice compared to (count => count + 1)
}

const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevState =>({...prevState, isFavorite: !prevState.isFavorite}))

    }
    in parent to just use props.toggle in the onClick event in child component
    toggle={() => toggle(square.id)}


    Changing state in child components from parent set
    onClick={()=>props.toggle(props.id)}

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    if you want to something to display or not display
    {isShown && <p>{props.punchline}</p>}

    ternary: if you want a or b to display "isShwon ? a : b"



    //form
    const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: ""}
)

function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

*/
