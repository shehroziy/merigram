import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div className='mycard'>
      <div className="card card__auth">
      <h2>Devgram</h2>
      <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Pochta manzilingiz</label>
        </div>

      <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Sizning parolingiz</label>
        </div>
        <button className="waves-effect waves-light btn">
          Kirish
        </button>

        <p>
          <Link to="/signup">Do not have account</Link>
        </p>
      </div>
    </div>
  )
}
