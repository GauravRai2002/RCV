
//Background Animation...


var ele = Math.floor(Math.random() * 5);
var anim = Math.floor(Math.random() * 5);
const root = document.querySelector(':root');
const e = document.getElementById('_0' + ele);
const e1 = document.getElementById('_00' + ele);
const e2 = document.getElementById('_000' + ele);
const e3 = document.getElementById('_0000' + ele);
var es = getComputedStyle(root);

//variable changing for initial and final position 
root.style.setProperty('--pos_x_init', Math.floor(Math.random() * (1000 - (-300) + 1) + (-300)) + 'px');
root.style.setProperty('--pos_y_init', Math.floor(Math.random() * (900 - (950) + 1) + (950)) + 'px');
root.style.setProperty('--pos_x_final', Math.floor(Math.random() * (900 - (-300) + 1) + (-300)) + 'px');
root.style.setProperty('--pos_y_final', Math.floor(Math.random() * (-250 - (-300) + 1) + (-300)) + 'px');

//animation addition
e.setAttribute('style', 'display: block;position: relative;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';animation : anim0 1s ease-in-out; z-index:2;transform: scale(1.3);')
e1.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';  height: 1000px;  width: 1000px; animation : anim1 2s ease-in-out ;')
e2.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';  height: 1000px;  width: 1000px; animation : anim2 2s ease-in-out ;')
e3.setAttribute('style', 'display: block ; position: absolute;top:' + es.getPropertyValue('--pos_y_final') + ';left:' + es.getPropertyValue('--pos_x_final') + ';  height: 1000px;  width: 1000px;animation : anim3 2s ease-in-out ;')


setTimeout(() => {
    e1.style.transform = 'scale(1.75)';
    e2.style.transform = 'scale(2)';
    e3.style.transform = 'scale(2.25)';
}, 2000);









const l11 = document.getElementById('l11');
const l22 = document.getElementById('l22');
const l33 = document.getElementById('l33');
const l44 = document.getElementById('l44');
const l55 = document.getElementById('l55');
// const l66 = document.getElementById('l66');
// const img = document.getElementById('listImg')

l11.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l11.classList.contains('accordion')) {
        setTimeout(() => {
            l11.classList.remove('accordion');
        }, 500);
    } else {
        l11.classList.add('accordion');
    }

    document.getElementById('p11').classList.toggle('hidden');
    document.getElementById('p11').classList.toggle('show');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i1').classList.toggle('fa-plus-circle')
    document.getElementById('i1').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
})
l22.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l22.classList.contains('accordion')) {
        setTimeout(() => {

            l22.classList.remove('accordion');
        }, 500);
    } else {
        l22.classList.add('accordion');
    }
    document.getElementById('p22').classList.toggle('hidden');
    document.getElementById('p22').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i2').classList.toggle('fa-plus-circle')
    document.getElementById('i2').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
})

l33.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l33.classList.contains('accordion')) {
        setTimeout(() => {

            l33.classList.remove('accordion');
        }, 500);
    } else {
        l33.classList.add('accordion');
    }
    document.getElementById('p33').classList.toggle('hidden');
    document.getElementById('p33').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l44.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i3').classList.toggle('fa-plus-circle')
    document.getElementById('i3').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
})
l44.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l44.classList.contains('accordion')) {
        setTimeout(() => {

            l44.classList.remove('accordion');
        }, 500);
    } else {
        l44.classList.add('accordion');
    }
    document.getElementById('p44').classList.toggle('hidden');
    document.getElementById('p44').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p55').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p55').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l55.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i4').classList.toggle('fa-plus-circle')
    document.getElementById('i4').classList.toggle('fa-minus-circle')
    document.getElementById('i5').classList.add('fa-plus-circle')
    document.getElementById('i5').classList.remove('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
})

l55.addEventListener('click', () => {
    // img.setAttribute('src', './img/628df8040afc12127ab2ce50_img-process-1.png');
    if (l55.classList.contains('accordion')) {
        setTimeout(() => {
            console.log('removed')
            l55.classList.remove('accordion');
        }, 500);
    } else {
        l55.classList.add('accordion');
    }
    document.getElementById('p55').classList.toggle('hidden');
    document.getElementById('p55').classList.toggle('show');
    document.getElementById('p11').classList.add('hidden');
    document.getElementById('p33').classList.add('hidden');
    document.getElementById('p22').classList.add('hidden');
    document.getElementById('p44').classList.add('hidden');
    // document.getElementById('p66').classList.add('hidden');
    document.getElementById('p11').classList.remove('show');
    document.getElementById('p33').classList.remove('show');
    document.getElementById('p22').classList.remove('show');
    document.getElementById('p44').classList.remove('show');
    // document.getElementById('p66').classList.remove('show');
    l11.classList.remove('accordion');
    l22.classList.remove('accordion');
    l33.classList.remove('accordion');
    l44.classList.remove('accordion');
    // l66.classList.remove('accordion');
    document.getElementById('i5').classList.toggle('fa-plus-circle')
    document.getElementById('i5').classList.toggle('fa-minus-circle')
    // document.getElementById('i6').classList.add('fa-plus-circle')
    // document.getElementById('i6').classList.remove('fa-minus-circle')
    document.getElementById('i4').classList.add('fa-plus-circle')
    document.getElementById('i4').classList.remove('fa-minus-circle')
    document.getElementById('i3').classList.add('fa-plus-circle')
    document.getElementById('i3').classList.remove('fa-minus-circle')
    document.getElementById('i2').classList.add('fa-plus-circle')
    document.getElementById('i2').classList.remove('fa-minus-circle')
    document.getElementById('i1').classList.add('fa-plus-circle')
    document.getElementById('i1').classList.remove('fa-minus-circle')
})



document.getElementById('foot12').addEventListener('mouseenter', () => {
    document.getElementById('bottom2').style.width = '100%'

});



document.getElementById('foot12').addEventListener('mouseleave', () => {
    document.getElementById('bottom2').style.width = '10%'

});





// Photos Population

function populate(arr, count, text, ids, dec) {




    const ImgArea = document.getElementById('photosarea');
    ImgArea.innerHTML = '';


    document.querySelectorAll('.heading1 ul li').forEach(items => {
        items.classList.remove('active');
        items.style.borderBottom = 'none';
        items.style.color = 'black';
        items.style.opacity = '0.5';
    })




    document.getElementById(ids).classList.add('active')



    arr.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('imgdiv');
        const img = document.createElement('img');
        // console.log(item)
        img.setAttribute('src', '../img/work/page1/' + item + '.png')
        ImgArea.appendChild(div);
        div.appendChild(img)
        div.appendChild(document.createTextNode(text[count]))
        count++;
    })
    const div = document.createElement('div');
    div.classList.add('bottom-text')
    // div.appendChild(document.createTextNode('and more ...'))
    ImgArea.appendChild(div)




    if (dec == 0) {
        document.querySelector('body').style.backgroundColor = '#1C171D';
        document.getElementById('logo').style.filter = 'invert(1)';
        document.getElementById('nav').style.color = 'white';
        document.getElementById('_1').style.backgroundColor = 'white';
        document.getElementById('_2').style.backgroundColor = 'white';
        document.querySelector('.heading1 div').style.color = 'white';
        document.getElementsByClassName('active')[0].style.color = '#CA3BFA';
        document.getElementsByClassName('active')[0].style.borderBottom = '2px solid #CA3BFA';
        document.getElementsByClassName('container')[0].style.opacity = '0.9';
        document.getElementsByClassName('container')[0].style.filter = 'brightness(1.35)';
        document.getElementsByClassName('bottom-text')[0].style.color = 'white';
        document.querySelectorAll('.imgdiv').forEach(ele => {
            ele.style.color = 'white';
        })

        for (let i = 0; i <= 4; i++) {
            document.querySelector('#_00' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelector('#_000' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelector('#_0000' + i + ' g path').setAttribute('stroke', '#1C171D')
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[0].style.stopColor = '#40C9FC'
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[1].style.stopColor = '#DE26FA'
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('x2', '110%')
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('y2', '0%')
        }


        document.getElementById('ham').addEventListener('mouseenter', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })
        document.getElementById('ham').addEventListener('mouseleave', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })



    } else {
        document.querySelector('body').style.backgroundColor = 'transparent';
        document.getElementById('logo').style.filter = 'invert(0)';
        document.getElementById('nav').style.color = 'black';
        document.getElementById('_1').style.backgroundColor = 'black';
        document.getElementById('_2').style.backgroundColor = 'black';
        document.getElementsByClassName('active')[0].style.color = 'black';
        document.getElementsByClassName('active')[0].style.opacity = '1';
        document.getElementsByClassName('active')[0].style.borderBottom = '2px solid black';
        document.querySelector('.heading1 div').style.color = 'black';
        document.getElementsByClassName('container')[0].style.opacity = '1';
        document.getElementsByClassName('container')[0].style.filter = 'brightness(1)';
        document.getElementsByClassName('bottom-text')[0].style.color = '#181919';
        document.querySelectorAll('.imgdiv').forEach(ele => {
            ele.style.color = '#181919';
        })
        for (let i = 0; i <= 4; i++) {
            document.querySelector('#_00' + i + ' g path').setAttribute('stroke', '#F7F7F7')
            document.querySelector('#_000' + i + ' g path').setAttribute('stroke', '#F7F7F7')
            document.querySelector('#_0000' + i + ' g path').setAttribute('stroke', '#F7F7F7')
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[0].style.stopColor = 'rgb(194, 229, 156)'
            document.querySelectorAll('#_0' + i + ' g defs linearGradient stop')[1].style.stopColor = 'rgb(98, 190, 183)'
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('x2', '0%')
            document.querySelector('#_0' + i + ' g defs linearGradient').setAttribute('y2', '100%')
        }

        document.getElementById('ham').addEventListener('mouseenter', () => {
            document.getElementById('_1').style.backgroundColor = 'white'
            document.getElementById('_2').style.backgroundColor = 'white'
        })
        document.getElementById('ham').addEventListener('mouseleave', () => {
            document.getElementById('_1').style.backgroundColor = 'black'
            document.getElementById('_2').style.backgroundColor = 'black'
        })
    }

}

populate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 0, ['Ruminatic- SaaS Wes ', 'Cake- SaaS Dashboard', 'Amarette- Watch Ecom Store', 'Botiko- Interiors Web Design', 'Saletion- Saas Web Design', 'Dappr- CRM Dashboard', 'Macron- Team Club Web Design', 'Mager- Arm Dashboard', 'MR- Interior Design Web', 'Branova- Air Purifier Web Design', 'Sooth- Organic Creams Web Design', 'Phantom- Discord Bot Design', 'Artchitec- Architecture Studio Web Design', 'VK BYGG- Construction Web Design', 'Mustang Garage- Car Forum Web Design', 'Creatsy- Mask Ecom Store Design', 'Datra- Marketing Web Design', 'Acura- Management Dashboard Design '], 'l1', -1)






