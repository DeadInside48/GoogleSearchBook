import style from './Dropdown.module.scss';

type Props = {
  title: string,
  value: string,
  optionList: string[],
  onChange: (value: string) => void,
};

function Dropdown({
  onChange,
  value,
  optionList,
  title,
}: Props) {
  return (
    <div
      className={style['sorting-by-select']}
    >
      <span
        className={style['select-name']}
      >
        {title}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {
          optionList.map((el) => (
            <option
              value={el}
              key={el}
            >
              {el}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Dropdown;
