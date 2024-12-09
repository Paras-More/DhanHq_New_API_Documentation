import React from 'react'
import DynamicTable from '../Common_Components/DynamicTable'
function Annexure() {

    const annexureTableData = [
        { "script": "CNXMEDIA", "id": "100004438", "name": "CNX Media", "exchange": "NSE" },
        { "script": "MID150", "id": "100005632", "name": "MID150", "exchange": "BSE" },
        { "script": "TELCOM", "id": "100005626", "name": "TELCOM", "exchange": "BSE" },
        { "script": "BSEHC", "id": "100005644", "name": "BSE HC", "exchange": "BSE" },
        { "script": "DOL200", "id": "100005651", "name": "DOL200", "exchange": "BSE" },
        { "script": "SENSEX50", "id": "100005628", "name": "SENSEX50", "exchange": "BSE" },
        { "script": "GREENX", "id": "100005614", "name": "GREENX", "exchange": "BSE" },
        { "script": "MIDCPNIFTY", "id": "100003333", "name": "NIFTY MID SELECT", "exchange": "NSE" },
        { "script": "VALUE20", "id": "100005568", "name": "Nifty50 Value 20", "exchange": "NSE" },
        { "script": "NIFTYQTY30", "id": "100005576", "name": "Nifty Quality 30", "exchange": "NSE" },
        { "script": "NIFTY500MTCAP", "id": "100005605", "name": "NIFTY500 MULTICAP", "exchange": "NSE" },
        { "script": "UTILS", "id": "100005627", "name": "UTILS", "exchange": "BSE" },
        { "script": "BANKNIFTY", "id": "10000888", "name": "Nifty Bank", "exchange": "NSE" },
        { "script": "NIFTYPR2X", "id": "100005572", "name": "Nifty50 PR 2x Lev", "exchange": "NSE" },
        { "script": "NIFTYCPSE", "id": "100004427", "name": "Nifty CPSE", "exchange": "NSE" },
        { "script": "LCTMCI", "id": "100005611", "name": "LCTMCI", "exchange": "BSE" },
        { "script": "LMI250", "id": "100005634", "name": "LMI250", "exchange": "BSE" },
        { "script": "NIFTY200", "id": "100004437", "name": "Nifty 200", "exchange": "NSE" },
        { "script": "REALTY", "id": "100005654", "name": "REALTY", "exchange": "BSE" },
        { "script": "NIFTYAUTO", "id": "100004441", "name": "Nifty Auto", "exchange": "NSE" },
        { "script": "METAL", "id": "100005582", "name": "Nifty Metal", "exchange": "NSE" },
        { "script": "MFG", "id": "100005658", "name": "MFG", "exchange": "BSE" },
        { "script": "NIFTYALPHA50", "id": "100005592", "name": "NIFTY Alpha 50", "exchange": "NSE" },
        { "script": "BSEIT", "id": "100005640", "name": "BSE IT", "exchange": "BSE" },
        { "script": "BANKEX", "id": "100005656", "name": "BANKEX", "exchange": "BSE" },
        { "script": "NIFTYLMID250", "id": "100005604", "name": "NIFTY LARGEMID250", "exchange": "NSE" },
        { "script": "AUTO", "id": "100005645", "name": "AUTO", "exchange": "BSE" },
        { "script": "NIFTYGS813YR", "id": "100004434", "name": "Nifty GS 8 13Yr", "exchange": "NSE" },
        { "script": "NIFTYGS10YRCLN", "id": "100004428", "name": "Nifty GS 10Yr CLN", "exchange": "NSE" },
        { "script": "BSESER", "id": "100005613", "name": "BSESER", "exchange": "BSE" },
        { "script": "NIFTYPSE", "id": "100004440", "name": "Nifty PSE", "exchange": "NSE" },
        { "script": "BSE100", "id": "100005637", "name": "BSE100", "exchange": "BSE" },
        { "script": "NIFTYMID50", "id": "100005569", "name": "Nifty Midcap 50", "exchange": "NSE" },
        { "script": "NIFTYALOWVOL", "id": "100005599", "name": "NIFTY AlphaLowVol", "exchange": "NSE" },
        { "script": "BSE200", "id": "100005638", "name": "BSE200", "exchange": "BSE" },
        { "script": "DIVPOINT", "id": "100005586", "name": "Nifty50 Div Point", "exchange": "NSE" },
        { "script": "NIFTYMID100FREE", "id": "100004429", "name": "Nifty MID100 Free", "exchange": "NSE" },
        { "script": "NIFTYPR1X", "id": "100005571", "name": "Nifty50 PR 1x Inv", "exchange": "NSE" },
        { "script": "NIFTY100ESGSL", "id": "100005601", "name": "Nifty100ESGSecLdr", "exchange": "NSE" },
        { "script": "NIFTYPHARMA", "id": "100004436", "name": "Nifty Pharma", "exchange": "NSE" },
        { "script": "ENERGY", "id": "100005620", "name": "ENERGY", "exchange": "BSE" },
        { "script": "BSEFMC", "id": "100005641", "name": "BSEFMC", "exchange": "BSE" },
        { "script": "BHRT22", "id": "100005630", "name": "BHRT22", "exchange": "BSE" },
        { "script": "MEDIA", "id": "100005584", "name": "Nifty Media", "exchange": "NSE" },
        { "script": "ESG100", "id": "100005631", "name": "ESG100", "exchange": "BSE" },
        { "script": "NIFTYGS1115YR", "id": "100004435", "name": "Nifty GS 11 15Yr", "exchange": "NSE" },
        { "script": "NIFTYPSUBANK", "id": "100004431", "name": "Nifty PSU Bank", "exchange": "NSE" },
        { "script": "NIFTY100LV30", "id": "100005591", "name": "NIFTY100 LowVol30", "exchange": "NSE" },
        { "script": "BSEPSU", "id": "100005636", "name": "BSEPSU", "exchange": "BSE" },
        { "script": "NIFTY500", "id": "100004439", "name": "Nifty 500", "exchange": "NSE" },
        { "script": "REALITY", "id": "100005566", "name": "Nifty Realty", "exchange": "NSE" },
        { "script": "NIFTYFMCG", "id": "100004425", "name": "Nifty FMCG", "exchange": "NSE" },
        { "script": "NIFTY200MTM30", "id": "100005600", "name": "Nifty200Momentm30", "exchange": "NSE" },
        { "script": "POWER", "id": "100005653", "name": "POWER", "exchange": "BSE" },
        { "script": "NIFTYFINS2550", "id": "100005598", "name": "Nifty FinSrv25 50", "exchange": "NSE" },
        { "script": "NIFTY50USD", "id": "100004443", "name": "Nifty50 USD", "exchange": "NSE" },
        { "script": "NIFTYIT", "id": "100004433", "name": "Nifty IT", "exchange": "NSE" },
        { "script": "NIFTYTR2X", "id": "100005607", "name": "Nifty50 TR 2x Lev", "exchange": "NSE" },
        { "script": "SENSEX", "id": "100002222", "name": "SENSEX", "exchange": "BSE" },
        { "script": "NIFTYMCAP150", "id": "100005593", "name": "NIFTY MIDCAP 150", "exchange": "NSE" },
        { "script": "SHA50", "id": "100005609", "name": "SHA50", "exchange": "BSE" },
        { "script": "NIFTYOIL&GAS", "id": "100005606", "name": "NIFTY OIL AND GAS", "exchange": "NSE" },
        { "script": "SMLCAP", "id": "100005648", "name": "SMLCAP", "exchange": "BSE" },
        { "script": "NIFGSCOMPS", "id": "100005580", "name": "Nifty GS Compsite", "exchange": "NSE" },
        { "script": "NIFTYGSCOMPSITE", "id": "100004426", "name": "Nifty GS Composite", "exchange": "NSE" },
        { "script": "OILGAS", "id": "100005652", "name": "OILGAS", "exchange": "BSE" },
        { "script": "NIFTYSCAP50", "id": "100005594", "name": "NIFTY SMLCAP 50", "exchange": "NSE" },
        { "script": "NIFTYHELCARE", "id": "100005603", "name": "NIFTY HEALTHCARE", "exchange": "NSE" },
        { "script": "SMEIPO", "id": "100005615", "name": "BSEEQ_ID_INDICES", "exchange": "BSE" },
        { "script": "FINSER", "id": "100005621", "name": "FINSER", "exchange": "BSE" },
        { "script": "NIFTY", "id": "10000999", "name": "Nifty 50", "exchange": "NSE" },
        { "script": "GROWTH", "id": "100005560", "name": "Nifty GrowSect 15", "exchange": "NSE" },
        { "script": "SNXT50", "id": "100005629", "name": "SNXT50", "exchange": "BSE" },
        { "script": "INDIAVIX", "id": "100004444", "name": "INDIA VIX", "exchange": "NSE" },
        { "script": "NIFTY100EQL", "id": "100005590", "name": "NIFTY100 EQL Wgt", "exchange": "NSE" },
        { "script": "SERVICE", "id": "100005562", "name": "Nifty Serv Sector", "exchange": "NSE" },
        { "script": "BSETECK", "id": "100005655", "name": "TECK", "exchange": "BSE" },
        { "script": "BSECD", "id": "100005643", "name": "BSE CD", "exchange": "BSE" },
        { "script": "NIFTY50EQL", "id": "100005589", "name": "NIFTY50 EQL Wgt", "exchange": "NSE" },
        { "script": "LRGCAP", "id": "100005623", "name": "LRGCAP", "exchange": "BSE" },
        { "script": "SMLSEL", "id": "100005625", "name": "SMLSEL", "exchange": "BSE" },
        { "script": "BSECG", "id": "100005642", "name": "BSE CG", "exchange": "BSE" },
        { "script": "COMDTY", "id": "100005618", "name": "COMDTY", "exchange": "BSE" },
        { "script": "ALLCAP", "id": "100005617", "name": "ALLCAP", "exchange": "BSE" },
        { "script": "DOL30", "id": "100005649", "name": "DOL30", "exchange": "BSE" },
        { "script": "MNC", "id": "100005561", "name": "Nifty MNC", "exchange": "NSE" },
        { "script": "NIFTYGS10YR", "id": "100004421", "name": "Nifty GS 10Yr", "exchange": "NSE" },
        { "script": "BEESNAV", "id": "100005570", "name": "HangSeng BeES-NAV", "exchange": "NSE" },
        { "script": "NIFTYSML100FREE", "id": "100004432", "name": "Nifty SML100 Free", "exchange": "NSE" },
        { "script": "MSL400", "id": "100005635", "name": "MSL400", "exchange": "BSE" },
        { "script": "NIFTYCONDUR", "id": "100005602", "name": "NIFTY CONSR DURBL", "exchange": "NSE" },
        { "script": "NIFTYNXT50", "id": "100004420", "name": "Nifty Next 50", "exchange": "NSE" },
        { "script": "NIFTYSCAP250", "id": "100005595", "name": "NIFTY SMLCAP 250", "exchange": "NSE" },
        { "script": "NIFTYTR1X", "id": "100005573", "name": "Nifty50 TR 1x Inv", "exchange": "NSE" },
        { "script": "LIX15", "id": "100004424", "name": "LIX 15", "exchange": "NSE" },
        { "script": "NIFTYGS48YR", "id": "100004422", "name": "Nifty GS 4 8Yr", "exchange": "NSE" },
        { "script": "DFRGRI", "id": "100005610", "name": "DFRGRI", "exchange": "BSE" },
        { "script": "DIVOPPS", "id": "100005587", "name": "Nifty Div Opps 50", "exchange": "NSE" },
        { "script": "NIFTYMIDLQ15", "id": "100005574", "name": "Nifty Mid Liq 15", "exchange": "NSE" },
        { "script": "BSE500", "id": "100005639", "name": "BSE500", "exchange": "BSE" },
        { "script": "CONDIS", "id": "100005619", "name": "CONDIS", "exchange": "BSE" },
        { "script": "ESG100", "id": "100005608", "name": "S&P BSE 100 ESG Index", "exchange": "BSE" },
        { "script": "NIFTYGS15YRPLUS", "id": "100004423", "name": "Nifty GS 15YrPlus", "exchange": "NSE" },
        { "script": "NIFTY200QT30", "id": "100005597", "name": "NIFTY200 QUALTY30", "exchange": "NSE" },
        { "script": "MIDSEL", "id": "100005624", "name": "MIDSEL", "exchange": "BSE" },
        { "script": "ENEGRY", "id": "100005563", "name": "Nifty Energy", "exchange": "NSE" },
        { "script": "SML250", "id": "100005633", "name": "SML250", "exchange": "BSE" },
        { "script": "NIFTYSMALL", "id": "100005588", "name": "NIFTY SMLCAP 100", "exchange": "NSE" },
        { "script": "NIFTYMDSL400", "id": "100005596", "name": "NIFTY MIDSML 400", "exchange": "NSE" },
        { "script": "INDSTR", "id": "100005622", "name": "INDSTR", "exchange": "BSE" },
        { "script": "NIFTY100", "id": "100004442", "name": "Nifty 100", "exchange": "NSE" },
        { "script": "BSEIPO", "id": "100005657", "name": "BSEIPO", "exchange": "BSE" },
        { "script": "NIFTYLIQ15", "id": "100005558", "name": "Nifty100 Liq 15", "exchange": "NSE" },
        { "script": "MIDCAP", "id": "100005647", "name": "MIDCAP", "exchange": "BSE" },
        { "script": "SHARIAH", "id": "100005567", "name": "Nifty Shariah", "exchange": "NSE" },
        { "script": "INFRA", "id": "100005557", "name": "Nifty Infra", "exchange": "NSE" },
        { "script": "NIFTYMIDCAP100", "id": "100004430", "name": "NIFTY MIDCAP 100", "exchange": "NSE" },
        { "script": "NIFTYPVTBANK", "id": "100005575", "name": "Nifty Pvt Bank", "exchange": "NSE" },
        { "script": "INFRA", "id": "100005659", "name": "INFRA", "exchange": "BSE" },
        { "script": "FINNIFTY", "id": "100001111", "name": "Nifty Fin Service", "exchange": "NSE" },
        { "script": "CONSUMPTION", "id": "100005583", "name": "Nifty Consumption", "exchange": "NSE" },
        { "script": "BSEMETL", "id": "100005646", "name": "METAL", "exchange": "BSE" },
        { "script": "BSEPBI", "id": "100005612", "name": "BSEPBI", "exchange": "BSE" },
        { "script": "COMMODITIES", "id": "100005585", "name": "Nifty Commodities", "exchange": "NSE" },
        { "script": "DOL100", "id": "100005650", "name": "DOL100", "exchange": "BSE" }
              
               
    ]
  return (
    <div className='flex md:min-w-[736px] flex-col gap-6'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font">Annexure</h1>
        <div>
            <p className='font-bold'>Please note :</p>
            <li className='font-light'>Tokens are Exchange tokens from Exchange Contract Master. </li>
            <li className='font-light'>For Index Tokens, refer below,</li>
        </div>
        <div>
              <DynamicTable data={annexureTableData}/>
        </div>



   

   </div>
  )
}

export default Annexure