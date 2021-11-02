const firstPartHtml = `<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css"
    integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<title>Challenge 10 Victor Weinert</title>
</head>
<body>
<section class="bg-dark text-light p-1 text-center" id="title">
    <div class="container">
        <h2>My Team</h2>
    </div>
</section>
<section class="p-2 text-center">
    <div class="container">
        <div class="d-lg-flex " id="members">`;
const thirdpartHtml = `</div>
</div>
</section>
</body>
</html>`;
function generateHtml(team) {
    let membersHtml = '';
    let leader = `<div class="member p-3">
    <h2>Team Leader</h2>
    <p>Name: ${team.leader.name}</p>
    <p>ID: ${team.leader.id}</p>
    <p>Email: <a href='mailto:${team.leader.email}'>${team.leader.email}<a/></p>
    <p>Office Number: ${team.leader.officeNumber}</p>
</div>`;
    let engineers = '';
    for (const engineer of team.engineers) {
        engineers += `<div class="member p-3">
        <h2>Engineer</h2>
        <p>Name: ${engineer.name}</p>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href='mailto:${engineer.email}'>${engineer.email}<a/></p>
        <p>Github: <a target='_blank' href='https://github.com/${engineer.github}'>${engineer.github}<a/></p>
    </div>`;
    }
    let interns = '';
    for (const intern of team.interns) {
        engineers += `<div class="member p-3">
        <h2>Intern</h2>
        <p>Name: ${intern.name}</p>
        <p>ID: ${intern.id}</p>
        <p>Email: <a href='mailto:${intern.email}'>${intern.email}<a/></p>
        <p>School: ${intern.school}</p>
    </div>`;
    }
    membersHtml = leader + engineers + interns;
    return firstPartHtml + membersHtml + thirdpartHtml;
}
module.exports = generateHtml;