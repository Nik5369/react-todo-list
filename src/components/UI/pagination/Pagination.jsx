export const Pagination = ({ pagesArray, page, changePage }) => {
  return (
    <div className="pagination-cont">
      {pagesArray.map((el, id) => {
        return (
          <button
            className={
              page === el ? 'btn-pugination-current' : 'btn-pugination'
            }
            key={id}
            onClick={() => changePage(el)}
          >
            {el}
          </button>
        )
      })}
    </div>
  )
}
