
const getAllTags = () => {
  const tagsConfig = [
    {
      "key":"icu_bed",
      "name": "ICU-Beds"
    },{
      "key":"plasma_donors",
      "name": "Plasma Donors"
    }, {
      "key": "oxygen_cylinder",
      "name": "Oxygen Cylinder"
    }, {
      "key": "oxygen_refill",
      "name": "Oxygen Refill"
    }]

    return tagsConfig;
}

export default {
  getAllTags
}