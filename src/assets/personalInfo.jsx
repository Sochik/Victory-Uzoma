import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaCalculator, FaFileInvoiceDollar } from "react-icons/fa6";

export const education = [
  {
    id: "100",
    year: "2024 – 2025",
    degree: "Chartered Accountant",
    institution: "Institute of Chartered Accountants of Nigeria. (ICAN)",
    grade: "Distinction",
  },
  {
    id: "101",
    year: "2018 – 2020",
    degree: "Higher National Diploma",
    institution: "Abia State Polytechnic Aba, Abia State.",
    grade: "Upper Credit in Accounting",
  },
  {
    id: "102",
    year: "2015-2017",
    degree: "National Diploma",
    institution: "Abia State Polytechnic Aba, Abia State.",
    grade: "Upper Credit in Accounting",
  },
  {
    id: "103",
    year: "2008-2013",
    degree: "West African Examination Certificate",
    institution:
      "Nunya Community Secondary School Isuikwato L.G.A. Abia State.",
    grade: "Five credits including English and Mathematics",
  },
  {
    id: "104",
    year: "2003 – 2008",
    degree: "First School Leaving Certificate",
    institution: "Umunwanwa Community Primary School 1.",
    grade: "Credit Grade",
  },
];

export const experience = [
  {
    id: "201",
    company: "Shade Joseph & Co Chartered Accountant",
    location: "Tian Plaza Utako FCT Abuja",
    position: "Auditor",
    duration: "September 2024 till this day",
    responsibility: (
      <div className="pt-2 text-dark">
        <li className="list-disc">Audit field work</li>
        <li className="list-disc">Audit testing and Evaluations</li>
        <li className="list-disc">Audit report and Follow up</li>
      </div>
    ),
  },
  {
    id: "202",
    company: "Urban Shelter Infrastructure Limited",
    location: "Shippers Plaza Wuse Zone 5  FCT Abuja",
    position: "Junior Accountant",
    duration: "(Six Months Contract Service) March to  August 2024",
    responsibility: (
      <div className="pt-2 text-dark">
        <li className="list-disc">Bank reconciliation of Clients Accounts</li>
        <li className="list-disc">Debtors Reconciliations</li>
        <li className="list-disc">
          Vouching of Payments for Purchasing Invoices
        </li>
        <li className="list-disc">
          Vouching of Sales Invoices and Debtors Accounts
        </li>
        <li className="list-disc">
          Preparation of Statutory Returns (VATS, WHT, NSITF PAYE/Remittance to
          appropriat agencies)
        </li>
        <li className="list-disc">Maintaining Adequate Fixed Asset Register</li>
      </div>
    ),
  },
  {
    id: "203",
    company: "Bauchi State University, Gadau Bauchi",
    location: "Gadu, Bauchi State",
    position: "Staff and Advances Unit, Bursary Department ",
    duration: "(NYSC One Year Compulsory Scheme) 2023 to 2024",
    responsibility: (
      <div className="pt-2 text-dark">
        <li className="list-disc">
          Receive and review loan applications from staff members
        </li>
        <li className="list-disc">Verify eligibility and creditworthiness</li>
        <li className="list-disc">Schedule and manage loan repayment</li>
        <li className="list-disc">Process advance payment</li>
        <li className="list-disc">Calculate interest on loan and advances.</li>
        <li className="list-disc">Report on loans and advances activities.</li>
      </div>
    ),
  },
  {
    id: "204",
    company: "Prime Lifting Nigeria Limited, Port-Harcourt ",
    location: "Rumukalagbor Port-Harcourt, Rivers State",
    position: "Accountant",
    duration: "2014 to 2017",
    responsibility: (
      <div className="pt-2 text-dark">
        <li className="list-disc">Bank reconciliation of Clients Accounts.</li>
        <li className="list-disc">Debtors Reconciliations.</li>
        <li className="list-disc">
          Vouching of Payments for Purchasing Invoices.
        </li>
        <li className="list-disc">
          Vouching of Sales Invoices and Debtors Accounts.
        </li>
        <li className="list-disc">
          Preparation of Statutory Returns (VATS, WHT, NSITF PAYE/Remittance to
          appropriate agencies).
        </li>
        <li className="list-disc">Maintaining Adequate Fixed Asset Register</li>
      </div>
    ),
  },
];

export const skills = [
  { id: "301", skill: "Cash Management", percentage: "80" },
  { id: "302", skill: "Cost Accounting", percentage: "90" },
  { id: "303", skill: "Interpersonal Skill", percentage: "93" },
  { id: "304", skill: "QuickBooks Accounting Software", percentage: "83" },
  { id: "305", skill: "Tally Accounting Software", percentage: "89" },
  { id: "306", skill: "Microsoft Excel", percentage: "98" },
  { id: "307", skill: "Microsoft Word", percentage: "87" },
  { id: "308", skill: "Google spreadsheet", percentage: "95" },
  { id: "309", skill: "Financial management", percentage: "90" },
];

export const personinfo = [
  {
    name: "Uzoma Victory Chimechefulam.",
    doB: "November 05, 1995.",
    address: "Tian Plaza Utako FCT Abuja, FCT Abuja.",
    zip_Code: "901102",
    email: "praisevictor23@gmail.com",
    phone_Number: "+2348117545438, +2348131910779",
  },
];

export const services = [
  {
    id: "405",
    icon: (
      <FaFileInvoiceDollar className="text-5xl my-auto mx-auto text-dark" />
    ),
    service: "Tax Audit",
    dscp: "Ensure compliance with tax regulations through meticulous auditing and reporting.",
  },
  {
    id: "406",
    icon: <FaMoneyCheckAlt className="text-5xl my-auto mx-auto text-dark" />,
    service: "Payee Remittance",
    dscp: "Streamline payroll tax deductions and timely remittances for employees and contractors.",
  },
  {
    id: "407",
    icon: <FaCalculator className="text-5xl my-auto mx-auto text-dark" />,
    service: "VAT Computation",
    dscp: "Accurate calculation of Value Added Tax (VAT) for businesses to remain tax-compliant.",
  },
];