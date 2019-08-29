export default function(formData, errors) {
  // Check we have at least one creator
  if (formData.people) {
    const roles = formData.people.flatMap(p => {
      return p.role
    });  

    if (roles.findIndex(r => { return r === "creator"}) === -1) {
      errors.people.addError("At least one person must be have the role of creator.")
    }

    if (roles.findIndex(r => { return r === "contact"}) === -1) {
      errors.people.addError("At least one person must be have the role of contact.")
    }
  }

  return errors;
}