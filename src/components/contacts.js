import "./contacts.css"

export default function contacts(props) {
  return (
        <table>
            <div class="contactImage">
              {/* {{props.picture} ? <img src={props.picture} alt={props.name} /> : <img src="https://via.placeholder.com/182x268" alt="" /></img> } */}
            </div>
            <div class="contact">{props.name}</div>
            <div class="contact">{props.popularity}</div>
        </table>
        )
    }