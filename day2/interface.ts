const pam: Employee = {
  name: "pam",
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = pam.id + " - " + pam.name;
    if (!pam.isManager) {
      return "mgr-" + uniqueId;
    }
    return uniqueId;
  },
};

console.log(pam.getUniqueId());
