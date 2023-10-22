import { MyInput } from './UI/input/MyInput'
import { MySelect } from './UI/select/MySelect'

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      {/* <hr style={{ margin: '15px 0' }} /> */}
      <div className="selectCont">
        <MyInput
          placeholder="Поиск"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
        <MySelect
          value={filter.sort}
          onChange={(e) => {
            return setFilter({ ...filter, sort: e })
          }}
          defaultValue="Сортировка по"
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>
    </>
  )
}
