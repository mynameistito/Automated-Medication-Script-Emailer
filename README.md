```
# Automated Medication Script Emailer (Gmail / Google Workspace)

This Google Apps Script is designed to automate the process of sending emails for the resupply of medical scripts. It's particularly useful for patients or caregivers who need to regularly communicate with healthcare providers about ongoing medication needs.

## Features

- Sends an automated email to a medical provider or center for the resupply of specified medications.
- Includes a confirmation email to another recipient for order verification.
- Customizable to fit individual patient details and medication lists.
- Schedules email sending at specified intervals.

## How to Set Up and Deploy

### Step 1: Customize SETTINGS

Edit the `SETTINGS` object at the beginning of the script:

- `senderEmail`: Your email address.
- `senderName`: Your full name.
- `recipientEmail`: Email address of the doctor or medical center.
- `patientName`: The patient's full name.
- `patientID`: The patient's healthcare identifier or NHI number.
- `confirmationRecipientEmail`: Email address to receive order confirmation.
- `executeEvery`: Frequency of email sending in days (e.g., 30 for monthly).
- `medicines`: Array of medication names. Add or remove items as needed.

Example:
```javascript
var SETTINGS = {
    senderEmail: "john.doe@example.com",
    senderName: "John Doe",
    recipientEmail: "doctor@exampleclinic.com",
    patientName: "Jane Doe",
    patientID: "XYZ12345",
    confirmationRecipientEmail: "jane.doe@example.com",
    executeEvery: 30,
    medicines: ["Medicine 1", "Medicine 2", "Medicine 3"]
};
```

### Step 2: Deploy the Script

1. Open [Google Apps Script](https://script.google.com) and create a new project.
2. Copy and paste the entire script into the script editor.
3. Save the project with an appropriate name.

### Step 3: Run the Initial Trigger Function

- In the script editor, select the `createInitialTrigger` function.
- Click the Run button to execute this function.
- This sets up the first trigger based on the `executeEvery` value in SETTINGS.

### Step 4: Authorize the Script

- Google will prompt you to authorize the script to send emails and create triggers. Follow the steps to grant the necessary permissions.

## How to Stop the Script

To stop automatic email dispatch:

- Go to the "Triggers" section in the Google Apps Script editor.
- Find and delete the trigger for the `sendMonthlyEmail` function.

## Troubleshooting

- Ensure all email addresses are correct and active.
- Check your script's execution logs in the Apps Script editor for errors.
- Be aware of the daily quotas for sending emails in Google Apps Script.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributions

Contributions to this project are welcome. Please fork this repository and submit a pull request with your changes.

---

For more information or support, please open an issue in this repository.
```
