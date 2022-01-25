//images
import dashboard from "../styles/img/dashboard.png";
import organizationalCredit from "../styles/img/Organizational-credit.svg";
import socialSecurity from "../styles/img/Social-Security.png"
import openBanking from "../styles/img/open-banking.svg";
import postOffice from "../styles/img/post-office.png";
import validation from "../styles/img/validation.png";
import cardIssuance from "../styles/img/Card-issuance.png";
import wallet from "../styles/img/wallet.svg";
import leasing from "../styles/img/leasing.png";
import fishingCheck from "../styles/img/Fishing-check.png";
import billAndCharge from "../styles/img/Bills-and-charges.png";
import logout from "../styles/img/logout.png";

//internal lists
import {dashboardList} from "../listGroupItems/InternalList";
import {organizationalCreditList} from "../listGroupItems/InternalList";
import {socialSecurityList} from "../listGroupItems/InternalList";
import {openBankingList} from "../listGroupItems/InternalList";
import {postOfficeList} from "../listGroupItems/InternalList";
import {validationList} from "../listGroupItems/InternalList";
import {cardIssuanceList} from "../listGroupItems/InternalList";
import {walletList} from "../listGroupItems/InternalList";
import {leasingList} from "../listGroupItems/InternalList";
import {fishingCheckList} from "../listGroupItems/InternalList";
import {billAndChargeList} from "../listGroupItems/InternalList";
import {logOut} from "../listGroupItems/InternalList"

export const listGroup = [
    {
        name : "داشبورد",
        img : dashboard,
        key : 1,
        onClick : dashboardList,
    },
    {
        name : "اعتبار سازمانی",
        img : organizationalCredit,
        key : 2,
        onClick : organizationalCreditList,
    },
    {
        name : "تامین اجتماعی",
        img : socialSecurity,
        key : 3,
        onClick : socialSecurityList,
    },
    {
        name : "بانکداری باز",
        img : openBanking,
        key : 4,
        onClick : openBankingList,
    },
    {
        name : "اداره پست",
        img : postOffice,
        key : 5,
        onClick : postOfficeList,
    },
    {
        name : "اعتبار سنجی",
        img : validation,
        key : 6,
        onClick : validationList,
    },
    {
        name : "صدور کارت",
        img : cardIssuance,
        key : 7,
        onClick : cardIssuanceList ,
    },
    {
        name : "کیف پول",
        img : wallet,
        key : 8,
        onClick : walletList ,
    },
    {
        name : "فروش اقساطی",
        img : leasing,
        key : 9,
        onClick : leasingList ,
    },
    {
        name : "چک صیادی",
        img : fishingCheck,
        key : 10,
        onClick : fishingCheckList ,
    },
    {
        name : "قبوض و شارژ",
        img : billAndCharge,
        key : 11,
        onClick : billAndChargeList ,
    },
    {
        name : "خروج از حساب",
        img : logout,
        key : 12,
        onClick : logOut,
    }
]