var SETTINGS = {
    senderEmail: "", // Your Email
    senderName: "", // Your Name
    recipientEmail: "", // Recipient of the Main Email (Example Doctor / Medical Provider)
    patientName: "", // Patient's Name
    patientID: "", // NHI or Healthcare Identifier
    confirmationRecipientEmail: "", // Recipient of the Confirmation Email
    executeEvery: "", // How Often you want this to execute in Days
    medicines: [ // List of medicines
        "Medicine 1",
        "Medicine 2",
        "Medicine 3",
        // Add more medicines as needed
    ]
};

function sendMonthlyEmail() {
    var subject = "Resupply of Script for " + SETTINGS.patientName + " | " + SETTINGS.patientID;
    var medicinesList = SETTINGS.medicines.map(function(medicine) {
        return "<li>" + medicine + "</li>";
    }).join("");

    var body = 
        "Hi Team,<br><br>" +
        "I am contacting on behalf of <b>" + SETTINGS.patientName + " (" + SETTINGS.patientID + ")</b> for a resupply of their scripts.<br><br>" +
        "<b>The following medications they are after are as follows;</b><br><ul>" + medicinesList + "</ul><br>" +
        "Yours sincerely,<br>" + 
        SETTINGS.senderName; // Replace with your name or signature

    GmailApp.sendEmail(SETTINGS.recipientEmail, subject, "", {
        from: SETTINGS.senderEmail,
        htmlBody: body
    });

    // Confirmation Email
    var confirmationRecipient = SETTINGS.confirmationRecipientEmail;
    var confirmationSubject = "Email Sent: Script Ordered";
    var confirmationBody = 
        "Hi,<br>" +
        "This is an automated Email to confirm the successful placement of an order for a Script for <b>" + SETTINGS.patientName + "</b><br><br>" +
        "<b>Details of the Order:</b><br>" +
        "<b>Medications:</b><br><ul>" + medicinesList + "</ul><br>" + // List of medicines
        "<b>Recipient:</b> " + SETTINGS.recipientEmail + "<br>" +
        "- Automated Message";

    GmailApp.sendEmail(confirmationRecipient, confirmationSubject, confirmationBody, {
        from: SETTINGS.senderEmail,
        htmlBody: confirmationBody
    });


    scheduleNextRun(SETTINGS.executeEvery);
}

function scheduleNextRun(days) {
    var existingTriggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < existingTriggers.length; i++) {
        if (existingTriggers[i].getHandlerFunction() === 'sendMonthlyEmail') {
            ScriptApp.deleteTrigger(existingTriggers[i]);
        }
    }

    var nextRunDate = new Date();
    nextRunDate.setDate(nextRunDate.getDate() + days);

    ScriptApp.newTrigger('sendMonthlyEmail')
        .timeBased()
        .at(nextRunDate)
        .create();
}

function createInitialTrigger() {
    scheduleNextRun(SETTINGS.executeEvery);
}
