const mainContent = "Gửi Diệu Huyền ab cdnd ádkád ákjdnsadn bèb sadjá kdksd dsbdhsbd kdsndks dsjdn  "

const allbum1 = {
    content: "Đây là bức ảnh tớ ấn tượng nhất về cậu...",
    cdn: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/274985545_4339988126104786_1599995744925885474_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=vNsdqqK8rBUAX94hY7d&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBHmv8bxiCC_sSJWY-uhxIsb2YucYz2qSAB6VbCbBuRvg&oe=650F03BA"
}

const allbum2 = {
    content: "Còn đây là...",
    cdn: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/269854665_2388449841295929_3910447425964937241_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=8K0k_k2_PKkAX9K3AQh&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCfsscELBsFHq4PSayiPQwuwKPyYm74u4JRKI07saUPBA&oe=650E9816"
}

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("active");
    setTimeout(() => {
        const designContent = mainContent.split("");
        const mainLetterPage = document.querySelector(".letterContent");

        designContent.forEach((val, index) => {
            setTimeout(() => {
                mainLetterPage.innerHTML += val;
                if (index == (designContent.length - 1)) {
                    const allBum1 = document.querySelector("#allbum1");
                    allBum1.classList.add("active");

                    setTimeout(() => {
                        const contentAllbum1 = allbum1.content.split("");
                        allBum1.querySelector(".imgAllbum").src = allbum1.cdn;

                        contentAllbum1.forEach((valAllbum1, indexAllbum1) => {
                            setTimeout(() => {
                                allBum1.querySelector(".detailAllbum").innerHTML += valAllbum1;
                                if (indexAllbum1 == (contentAllbum1.length - 1)) {
                                    const allBum2 = document.querySelector("#allbum2");
                                    allBum2.classList.add("active");

                                    setTimeout(() => {
                                        const contentAllbum2 = allbum2.content.split("");
                                        allBum2.querySelector(".imgAllbum").src = allbum2.cdn;

                                        contentAllbum2.forEach((valAllbum2, indexAllbum2) => {
                                            setTimeout(() => {
                                                allBum2.querySelector(".detailAllbum").innerHTML += valAllbum2   
                                            }, 100 * (indexAllbum2 + 1))
                                        })
                                    })
                                }
                            }, 100 * (indexAllbum1 + 1))
                        })
                    }, 500)
                }
            }, 10 * index)
        })
    }, 500)
})