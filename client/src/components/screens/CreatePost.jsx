export default function CreatePost() {
  return (
    <div classNameNameName="card input-field postCard">
        <h2>Devgram</h2>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        <input type="file" />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
      <button className="waves-effect waves-light btn">
          Maqola qo'shish
        </button>
    </div>
    </div>
  );
}
