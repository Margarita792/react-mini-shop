function AppSort({ Sort }) {
  return (
    <div className="wrap-sort">
      <select className="sort" onChange={Sort}>
        <option className="option">Спочатку дешеві</option>
        <option >Спочатку дорожчі</option>
        <option >Від А до Я</option>
        <option >Від Я до А</option>
      </select>
    </div>
  )
}
export default AppSort;