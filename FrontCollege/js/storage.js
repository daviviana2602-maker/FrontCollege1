export function getVolunteers() {
    const data = localStorage.getItem("volunteers");

    return data ? JSON.parse(data) : [];
}

export function saveVolunteer(volunteer) {
    const volunteers = getVolunteers();

    volunteers.push(volunteer);

    localStorage.setItem("volunteers", JSON.stringify(volunteers));
}