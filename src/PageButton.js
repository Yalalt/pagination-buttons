import "./style/PageButton.css";

const PageButton = ({name, btnClass, btnOnClick}) => {

    return (
        <button className={`${btnClass}`} onClick={btnOnClick}>{name}</button>
    );
}
export default PageButton;