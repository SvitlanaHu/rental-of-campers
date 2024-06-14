import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setFilters } from "../../redux/camperSlice";
import { selectFilterConditions } from "../../redux/selectors";
import styles from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilterConditions);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = Array.from(event.target.elements);
    const location = formElements[0].value !== "default" ? formElements[0].value : undefined;

    const checkBoxValues = [];
    formElements.forEach((checkBox) => {
      if (checkBox.name === "equipment" && checkBox.checked) {
        checkBoxValues.push(checkBox.value);
      }
    });

    const radioBoxValue = formElements.find(
      (radio) =>
        radio.type === "radio" && radio.name === "form" && radio.checked
    )?.value;

    const radioBox = radioBoxValue ?  radioBoxValue : undefined;

    const resultFilter =  {}

    if (radioBox) resultFilter.radio = radioBox;
    if (location) resultFilter.location = location
    if (checkBoxValues.length) resultFilter.checkBox = checkBoxValues

    if (Object.entries(resultFilter).length === 0)
      return;

    dispatch(setFilters(resultFilter));
  };

  const handleChangeCheckBox = (event) => {
    event.currentTarget.classList.toggle(styles.checked);
  };

  function resetRadio() {
    document.getElementById("radio11").classList.remove(styles.checked);
    document.getElementById("radio21").classList.remove(styles.checked);
    document.getElementById("radio31").classList.remove(styles.checked);
    const radioButtons = document.querySelectorAll(
      'input[type="radio"][name="form"]'
    );
    radioButtons.forEach((button) => {
      button.checked = false;
    });
  }

  const handleChangeRadio = (event) => {
    resetRadio();
    event.currentTarget.classList.add(styles.checked);
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    document.getElementById("locationInput").value = "default";
    const checkBoxElements = document.getElementsByClassName(styles.checked);
    for (let i = checkBoxElements.length - 1; i >= 0; i--) {
      checkBoxElements[i].classList.remove(styles.checked);
    }

    const checkBoxButtons = document.querySelectorAll('input[type="checkbox"]');
    checkBoxButtons.forEach((button) => {
      button.checked = false;
    });

    resetRadio();
  };

  const equipmentGroup1 = ["AC", "Bathroom", "Toilet"];
  const equipmentGroup2 = ["Kitchen", "TV", "CD", "Radio", "Shower", "Water", "Freezer", "Conditioner", "Microwave"];
  const locations = [
    { city: "Kyiv", country: "Ukraine" },
    { city: "Lviv", country: "Ukraine" },
    { city: "Odesa", country: "Ukraine" },
    { city: "Dnipro", country: "Ukraine" },
    { city: "Kharkiv", country: "Ukraine" },
    { city: "Zaporizhzhia", country: "Ukraine" },
    { city: "Vinnytsia", country: "Ukraine" },
  ];

  return (
    <div className={styles.wrapper}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formlocalGroup}>
          <label
            className={styles.label}
            htmlFor="locationSelect"
          >
            Location
          </label>
          
            <select
              id="locationSelect"
              name="locationSelect"
              className={styles.locationSelect}
              defaultValue="Kyiv, Ukraine"
            >
              <option value="default">All locations</option>
                {locations.map((location, index) => (
                  <option
                    key={index}
                    value={`${location.city}, ${location.country}`}
                  >
                    {`${location.city}, ${location.country}`}
                  </option>
                ))}
            </select>         
          
          <svg className={styles.iconMap} width="20" height="22">
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
        </div>
        
        <div className={styles.formGroup}>
          <label>Filters</label>
          <h3 className={styles.title}>Vehicle equipment</h3>
          <ul>
            {equipmentGroup1.map((item, index) => (
              <li
                key={`group1-checkbox-${item}`}
                className={styles.checkBoxItemWrapper}
              >
                <label
                  className={styles.label}
                  htmlFor={`group1-checkbox-${item}`}
                >
                  <div
                    className={styles.checkBoxWrapper}
                    onClick={handleChangeCheckBox}
                  >
                    <svg
                      className={styles.iconFill}
                      width="32"
                      height="32"
                    >
                      <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                    </svg>
                    {item}
                  </div>
                  
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox1-${index}`}
                    onChange={handleChangeCheckBox}
                    className={styles.checkBox}
                  />
                </label>
              </li>
            ))}
            {equipmentGroup2.map((item, index) => (
              <li
                key={`group1-checkbox-${item}`}
                className={styles.checkBoxItemWrapper}
              >
                <label
                  className={styles.label}
                  htmlFor={`group1-checkbox-${item}`}
                >
                  <div
                    className={styles.checkBoxWrapper}
                    onClick={handleChangeCheckBox}
                  >
                    <svg
                      className={styles.icon}
                      width="32"
                      height="32"
                    >
                      <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                    </svg>
                    {item}
                  </div>
                  
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox1-${index}`}
                    onChange={handleChangeCheckBox}
                    className={styles.checkBox}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.headersWrapper}>
            <h3>Vehicle type</h3>
            <button
              className={styles.resetFilters}
              onClick={handleResetFilters}
              disabled={!(Object.entries(filters).length !== 0)}
            >
              {(Object.entries(filters).length !== 0) ? "Reset filters?" : "No active filters"}
            </button>
          </div>
            
          <ul className={styles.checkBoxGroup}>
            {[
              { id: "radio11", label: "Alcove", value: "Alcove", icon: "camper-alcove" },
              { id: "radio21", label: "Fully Integrated", value: "fullyIntegrated", icon: "camper-fully-int" },
              { id: "radio31", label: "Van", value: "panelTruck", icon: "camper-van" },
            ].map((radio, index) => (
              <li
                key={`radio-${radio.id}`}
                className={styles.checkBoxItemWrapper}
              >
                <label
                  htmlFor={`radio-${radio.id}`}
                  className={styles.label}
                >
                  <div
                    className={styles.checkBoxWrapper}
                    onClick={handleChangeRadio}
                    id={radio.id}
                  >
                    <svg className={styles.iconFill} width="32" height="32">
                      <use href={`${icons}#icon-${radio.icon}`}></use>
                    </svg>
                    {radio.label}
                  </div>
                </label>
                <input
                  type="radio"
                  name="form"
                  value={radio.value}
                  id={`radio-input-${index}`}
                  className={styles.radioBox}
                />
              </li>
            ))}
          </ul>
        </div>
          <button
            className={styles.btn}
            type="submit"
          >
            Search
          </button>
      </form>
    </div>
  );
};
