function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    const jobset = document.getElementsByName('job');
    let job = null;
    for(let i = 0; i < jobset.length; i++){
        if(jobset[i].checked){
            job = jobset[i].value;
        }
    }
    if(job){
        alert("Thank you or applying to be a " + job + "!");
    }else{
        alert("Please select a job!");
    }
}