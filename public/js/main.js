const generatePDF = async(myname)=>{
    const {PDFDocument,rgb} = PDFLib;
    
    const exBytes = await fetch("./certi.pdf").then((res) =>{
        return res.arrayBuffer();
    });

    const exfont = await fetch("./Sanchez-Regular.ttf").then(res =>{
       return res.arrayBuffer()
    })

   

    console.log(exBytes)

    const pdfDoc = await PDFDocument.load(exBytes)
    pdfDoc.registerFontkit(fontkit);

    const myFont = await pdfDoc.embedFont(exfont);
    const pages = pdfDoc.getPages();
    const firstPg = pages[0];
   
    

    firstPg.drawText(myname,{
       x:260,
       y:286,
       size: 35,
       lineHeight: 24,
          
       font:myFont,
       center:1 
    })

   
    const uri = await pdfDoc.saveAsBase64({dataUri:true});
    saveAs(uri,"RebelCertificate.pdf",{autoBom:true})

    // document.querySelector("#mypdf").src = uri;
    
};

const submitBtm = document.getElementById("submit")

const inputVal = document.querySelector("#name")

submitBtm.addEventListener("click",()=>{
    const val = inputVal.value
    generatePDF(val)
})

