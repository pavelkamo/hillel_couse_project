export default function sortBySalary(users) {
    return users.sort((a, b) => {
      if (a.salary !== b.salary) {
        return a.salary - b.salary;
      } else {
        return a.id - b.id;
      }
    });
  }