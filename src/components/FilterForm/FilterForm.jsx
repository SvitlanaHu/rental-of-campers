
import { useDispatch } from "react-redux";
import styles from "./FilterForm.module.css";
import icons from "../../images/sprite.svg";
import { resetFilters, setFilters } from "../../redux/camperSlice";

export const FilterForm = () => {  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target.form);
    const location = form.get("locationInput") || undefined;
    const checkBoxValue = Array.from(form.getAll("equipment"));
    const radioBoxValue = form.get("form");

    dispatch(
      setFilters({
        location,
        details: checkBoxValue,
        camperType: radioBoxValue,
      })
    );
  };

  const handleChangeCheckBox = (event) => {
    event.currentTarget.classList.toggle(styles.checked);
  };

  const resetRadio = () => {
    ["radio11", "radio21", "radio31"].forEach((id) => {
      document.getElementById(id).classList.remove(styles.checked);
    });
  };

  const handleChangeRadio = (event) => {
    resetRadio();
    event.currentTarget.classList.add(styles.checked);
  };

   const handleResetFilters = () => {
    dispatch(resetFilters());
    document.getElementById("locationInput").value = "";
    document.querySelectorAll(`.${styles.checked}`).forEach((element) => {
      element.classList.remove(styles.checked);
    });
    resetRadio();
  };

  const equipmentGroup1 = ["AC", "Bathroom", "Toilet"];
  const equipmentGroup2 = ["Kitchen", "TV", "CD", "Radio", "Shower", "Water", "Freezer", "Conditioner", "Microwave"];

  return (
    <div className={styles.wrapper}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formlocalGroup}>
          <label className={styles.label} htmlFor="locationInput">Location</label>
          <input
            type="text"
            name="locationInput"
            placeholder="Kyiv, Ukraine"
            id="locationInput"
            className={styles.locatonInput}
          />
          <svg className={styles.iconMap} width="20" height="22">
            <use href={`${icons}#icon-map-pin`}></use>
          </svg>
        </div>
        
        <div className={styles.formGroup}>
          <label>Filters</label>
          <h3 className={styles.title}>Vehicle equipment</h3>
          <ul>
            {equipmentGroup1.map((item, index) => (
              <li key={`group1-checkbox-${item}`}>
                <label className={styles.label}>
                  <svg className={styles.iconFill} width="32" height="32">
                    <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                  </svg>
                  {item}
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox1-${index}`}
                    onChange={handleChangeCheckBox}
                  />
                </label>
              </li>
            ))}
            {equipmentGroup2.map((item, index) => (
              <li key={`group2-checkbox-${item}`}>
                <label className={styles.label}>
                  <svg className={styles.icon} width="32" height="32">
                    <use href={`${icons}#icon-${item.toLowerCase()}`}></use>
                  </svg>
                  {item}
                  <input
                    type="checkbox"
                    name="equipment"
                    value={item.toLowerCase()}
                    id={`checkbox2-${index}`}
                    onChange={handleChangeCheckBox}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.formGroup}>
            <h3>Vehicle type</h3>
          <ul>
            {[
              { id: "radio11", label: "Alcove", value: "Alcove", icon: "camper-alcove" },
              { id: "radio21", label: "Fully Integrated", value: "fullyIntegrated", icon: "camper-fully-int" },
              { id: "radio31", label: "Van", value: "panelTruck", icon: "camper-van" },
            ].map((radio, index) => (
              <li key={`radio-${radio.id}`}>
                <label className={styles.label}>
                  <div
                    className={styles.radioBox}
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
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            type="submit"
          >
            Search
          </button>
          <p className={styles.resetFilters} onClick={handleResetFilters}>
            Reset filters?
          </p>
        </div>
      </form>
    </div>
  );
};