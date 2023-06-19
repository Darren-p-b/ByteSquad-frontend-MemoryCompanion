import React from 'react'
import { useState, useEffect } from 'react'
import MedicationForm from './MedicationForm'
import MedicationList from './MedicationList'

function Medication() {
  // hard coded some medication data to display on screen
  const testInput = [
    {
      name: 'Ibuprofen',
      dosageAmount: 2,
      schedule: 'daily',
      dosageTime: ['09:00', '17:00'],
      checked: false,
    },
    {
      name: 'Paracetomol',
      dosageAmount: 2,
      schedule: 'daily',
      dosageTime: ['10:00', '19:00'],
      checked: false,
    },
  ]

  const [medication, setMedication] = useState(testInput) // useState hook to set the medication array // array of objects
  const [addMedicationClicked, setAddMedicationClicked] = useState(false)

  function addMedication(newMedication) {
    setMedication([...medication, newMedication]) // spread operator to add new medication to the array
    console.log(medication)
  }
  // create object using form data
  const handleSubmit = (event) => {
    event.preventDefault() // Prevents the form from refreshing the page
    // newMedication is used to populate new object with form data
    let newMedication = {
      name: event.target.name.value,
      dosageAmount: event.target.dosage.value,
      schedule: event.target.schedule.value,
      dosageTime: event.target.time.value,
    }

    addMedication(newMedication)
    setAddMedicationClicked(false)
    console.log('added: ', medication)
  }

  return (
    <div>
      <h2>Medication</h2>

      {!addMedicationClicked && (
        <>
          {medication.map((item) => (
            <MedicationList
              name={item.name}
              dosageAmount={item.dosageAmount}
              schedule={item.schedule}
              dosageTime={item.dosageTime}
              checked={item.checked}
            />
          ))}
        </>
      )}

      {!addMedicationClicked && (
        <button onClick={() => setAddMedicationClicked(!addMedicationClicked)}>
          Add Medication
        </button>
      )}

      {addMedicationClicked && <MedicationForm handleSubmit={handleSubmit} />}
    </div>
  )
}

export default Medication
