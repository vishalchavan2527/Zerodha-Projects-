import React from "react";

function Footer() {
  return (

    <footer style={{backgroundColor:"rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col-12 col-md-6 col-lg-3 text-center text-md-start ">
          <img src="media/image/logo.svg" className="img-fluid" style={{ width: "60%" }} />
          <p className="mb-2 mt-3"><i class="fa-solid fa-phone"></i>+91 8605691688</p>
          <p className="mt-2">&copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>

          <div class="d-flex gap-3 fs-4 icon-link icon-link-hover ">
            <a href="#"><i class="fa-brands fa-x-twitter link-secondary "></i></a>
            <a href="#"><i class="fa-brands fa-square-facebook link-secondary"></i></a>
            <a href="#"><i class="fa-brands fa-instagram link-secondary"></i></a>
            <a href="https://www.linkedin.com/in/vishal-chavan025"><i class="fa-brands fa-linkedin-in link-secondary"></i></a>
          </div>

          <div class="d-flex gap-3 fs-4 mt-4 border-top">
            <a href="#" className="mt-3"><i class="fa-brands fa-youtube link-secondary"></i></a>
            <a href="#" className="mt-3"><i class="fa-brands fa-whatsapp link-secondary"></i></a>
            <a href="#" className="mt-3"><i class="fa-brands fa-telegram link-secondary"></i></a>
          </div>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="#" className="text-decoration-none">
            About
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Products
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Pricing
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Referral programme
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Careers
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Zerodha.tech
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Open source
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Press & media
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Zerodha Cares (CSR)
          </a>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="#" className="text-decoration-none ">
            {" "}
            Contact us
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Support portal
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Z-Connect blog
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            List of charges
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Downloads & resources
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            {" "}
            Videos
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Market overview
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            How to file a complaint?
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Status of your complaints
          </a>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="#" className="text-decoration-none ">
            Open an account
          </a>
          <br />
          <a href="#" className="text-decoration-none ">
            Fund transfer
          </a>
        </div>
      </div>

      <div className="mt-5 text-muted" style={{fontSize:"13px"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on <a href="#" className="text-decoration-none">SEBI SCORES</a>: Register on
        SCORES portal. Mandatory details for filing complaints on SCORES: Name,
        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
        Communication, Speedy redressal of the grievances
      </p>

      <a href="#" className="text-decoration-none">
        Smart Online Dispute Resolution | Grievances Redressal Mechanism
      </a>

      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please <a href="#" className="text-decoration-none">create a ticket here</a>.
      </p>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
