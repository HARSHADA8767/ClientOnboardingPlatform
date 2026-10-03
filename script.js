// =========================
// Client Registration
// =========================

const registrationForm = document.querySelector("form");

if (
    registrationForm &&
    document.getElementById("firstName")
) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const client = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            city: document.getElementById("city").value
        };

        let clients =
            JSON.parse(localStorage.getItem("clients")) || [];

        clients.push(client);

        localStorage.setItem(
            "clients",
            JSON.stringify(clients)
        );

        alert("Client registered successfully!");

        registrationForm.reset();
    });
}


// =========================
// Client Listing
// =========================

const clientTableBody =
    document.getElementById("clientTableBody");

if (clientTableBody) {

    const clients =
        JSON.parse(localStorage.getItem("clients")) || [];

    if (clients.length === 0) {

        clientTableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No clients registered yet.
                </td>
            </tr>
        `;

    } else {

        clients.forEach(function(client, index) {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>

                <td>
                    ${client.firstName}
                    ${client.lastName}
                </td>

                <td>${client.email}</td>

                <td>${client.phone}</td>

                <td>${client.city}</td>

                <td>
                    <button onclick="deleteClient(${index})">
                        Delete
                    </button>
                </td>
            `;

            clientTableBody.appendChild(row);
        });
    }
}


function deleteClient(index) {

    let clients =
        JSON.parse(localStorage.getItem("clients")) || [];

    clients.splice(index, 1);

    localStorage.setItem(
        "clients",
        JSON.stringify(clients)
    );

    location.reload();
}


// =========================
// KYC Verification
// =========================

const kycButton =
    document.getElementById("kycVerifyBtn");

if (kycButton) {

    kycButton.addEventListener("click", function() {

        const clientName =
            document.getElementById("kycClientName").value;

        const kycStatus =
            document.getElementById("kycStatus").value;

        const documentType =
            document.getElementById("kycDocumentType").value;

        const documentNumber =
            document.getElementById("kycDocumentNumber").value;

        const remarks =
            document.getElementById("kycRemarks").value;

        if (
            clientName === "" ||
            kycStatus === "" ||
            documentType === "" ||
            documentNumber === ""
        ) {

            alert("Please fill all KYC details.");

            return;
        }

        const kycData = {

            clientName: clientName,
            kycStatus: kycStatus,
            documentType: documentType,
            documentNumber: documentNumber,
            remarks: remarks
        };

        localStorage.setItem(
            "kycData",
            JSON.stringify(kycData)
        );

        alert("KYC verified successfully!");
    });
}


// =========================
// Document Upload
// =========================

const uploadDocumentBtn =
    document.getElementById("uploadDocumentBtn");

if (uploadDocumentBtn) {

    uploadDocumentBtn.addEventListener(
        "click",
        function() {

            const clientName =
                document.getElementById(
                    "documentClientName"
                ).value;

            const documentType =
                document.getElementById(
                    "documentType"
                ).value;

            const documentFile =
                document.getElementById(
                    "documentFile"
                ).files[0];

            if (
                clientName === "" ||
                documentType === "" ||
                !documentFile
            ) {

                alert(
                    "Please fill all document details."
                );

                return;
            }

            const documentData = {

                clientName: clientName,

                documentType: documentType,

                fileName: documentFile.name
            };

            localStorage.setItem(
                "documentData",
                JSON.stringify(documentData)
            );

            alert(
                "Document uploaded successfully!"
            );
        }
    );
}
// =========================
// Risk Assessment
// =========================

const riskAssessmentBtn =
    document.getElementById("riskAssessmentBtn");

if (riskAssessmentBtn) {

    riskAssessmentBtn.addEventListener("click", function () {

        const clientName =
            document.getElementById("riskClientName").value;

        const age =
            document.getElementById("riskAge").value;

        const income =
            document.getElementById("riskIncome").value;

        const occupation =
            document.getElementById("riskOccupation").value;

        const healthRisk =
            document.getElementById("healthRisk").value;

        const financialRisk =
            document.getElementById("financialRisk").value;

        const remarks =
            document.getElementById("riskRemarks").value;


        if (
            clientName === "" ||
            age === "" ||
            income === "" ||
            occupation === "" ||
            healthRisk === "" ||
            financialRisk === ""
        ) {

            alert("Please fill all risk assessment details.");

            return;
        }


        const riskData = {

            clientName: clientName,

            age: age,

            income: income,

            occupation: occupation,

            healthRisk: healthRisk,

            financialRisk: financialRisk,

            remarks: remarks
        };


        localStorage.setItem(
            "riskData",
            JSON.stringify(riskData)
        );


        alert("Risk assessment completed successfully!");

    });
}
// =========================
// Policy Recommendation
// =========================

const policyRecommendationBtn =
    document.getElementById("policyRecommendationBtn");

if (policyRecommendationBtn) {

    policyRecommendationBtn.addEventListener("click", function () {

        const clientName =
            document.getElementById("policyClientName").value;

        const policyType =
            document.getElementById("policyType").value;

        const coverageAmount =
            document.getElementById("coverageAmount").value;

        const estimatedPremium =
            document.getElementById("estimatedPremium").value;

        const recommendation =
            document.getElementById("policyRecommendation").value;

        const remarks =
            document.getElementById("policyRemarks").value;


        if (
            clientName === "" ||
            policyType === "" ||
            coverageAmount === "" ||
            estimatedPremium === "" ||
            recommendation === ""
        ) {

            alert("Please fill all policy details.");

            return;
        }


        const policyData = {

            clientName: clientName,

            policyType: policyType,

            coverageAmount: coverageAmount,

            estimatedPremium: estimatedPremium,

            recommendation: recommendation,

            remarks: remarks
        };


        localStorage.setItem(
            "policyData",
            JSON.stringify(policyData)
        );


        alert(
            "Policy recommendation saved successfully!"
        );

    });
}
// =========================
// Reports
// =========================

const reportTotalClients =
    document.getElementById("reportTotalClients");

if (reportTotalClients) {

    const clients =
        JSON.parse(localStorage.getItem("clients")) || [];

    const kycData =
        JSON.parse(localStorage.getItem("kycData"));

    const riskData =
        JSON.parse(localStorage.getItem("riskData"));

    const policyData =
        JSON.parse(localStorage.getItem("policyData"));


    // Total Clients

    reportTotalClients.textContent =
        clients.length;


    // KYC Status

    const reportKycStatus =
        document.getElementById("reportKycStatus");

    if (kycData) {

        reportKycStatus.textContent =
            kycData.kycStatus;

    } else {

        reportKycStatus.textContent =
            "Pending";
    }


    // Risk Status

    const reportRiskStatus =
        document.getElementById("reportRiskStatus");

    if (riskData) {

        reportRiskStatus.textContent =
            "Completed";

    } else {

        reportRiskStatus.textContent =
            "Pending";
    }


    // Policy Status

    const reportPolicyStatus =
        document.getElementById("reportPolicyStatus");

    if (policyData) {

        reportPolicyStatus.textContent =
            "Completed";

    } else {

        reportPolicyStatus.textContent =
            "Pending";
    }


    // Summary

    const reportSummary =
        document.getElementById("reportSummary");

    if (clients.length > 0) {

        reportSummary.textContent =
            "Client onboarding data is available. " +
            "KYC, risk assessment and policy recommendation " +
            "status are displayed above.";

    } else {

        reportSummary.textContent =
            "No client data available yet.";
    }

}
// =========================
// Dashboard Total Clients
// =========================

const dashboardTotalClients =
    document.getElementById("dashboardTotalClients");

if (dashboardTotalClients) {

    const clients =
        JSON.parse(localStorage.getItem("clients")) || [];

    dashboardTotalClients.textContent =
        clients.length;
}
const dashboardPendingKyc =
    document.getElementById("dashboardPendingKyc");

if (dashboardPendingKyc) {
    const kycData =
        JSON.parse(localStorage.getItem("kycData"));

    dashboardPendingKyc.textContent =
        kycData ? 0 : 18;
}
const dashboardVerifiedClients =
    document.getElementById("dashboardVerifiedClients");

if (dashboardVerifiedClients) {
    const kycData =
        JSON.parse(localStorage.getItem("kycData"));

    dashboardVerifiedClients.textContent =
        kycData ? 1 : 92;
}
const dashboardCompletionRate =
    document.getElementById("dashboardCompletionRate");

if (dashboardCompletionRate) {
    dashboardCompletionRate.textContent = "76%";
}