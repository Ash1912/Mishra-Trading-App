import React, { useState } from "react";
import mrpimage from "../assets/images/mrp.jpg";
import availablevaraintimage from "../assets/images/availablevariant.jpg";

import blackberry from "../assets/images/St. Louis/1.jpg";
import blueberry from "../assets/images/St. Louis/2.jpg";
import pinkberry from "../assets/images/St. Louis/3.jpg";
import bapple from "../assets/images/St. Louis/4.jpg";
import blackcode from "../assets/images/St. Louis/5.jpg";
import whitelondon from "../assets/images/St. Louis/6.jpg";
import blacklondon from "../assets/images/St. Louis/7.jpg";
import bluelondon from "../assets/images/St. Louis/8.jpg";
import maninblack from "../assets/images/St. Louis/9.jpg";
import originalmusk from "../assets/images/St. Louis/10.jpg";
import purewhitemusk from "../assets/images/St. Louis/11.jpg";
import misterlomani from "../assets/images/St. Louis/12.jpg";
import bluewater from "../assets/images/St. Louis/13.jpg";
import steffinei from "../assets/images/St. Louis/14.jpg";
import lepolo from "../assets/images/St. Louis/15.jpg";
import royalairforce from "../assets/images/St. Louis/16.jpg";
import sexinthecity from "../assets/images/St. Louis/17.jpg";
import atoz from "../assets/images/St. Louis/18.jpg";
import leopolice from "../assets/images/St. Louis/19.jpg";
import machomanpourhomme from "../assets/images/St. Louis/20.jpg";
import maninblue from "../assets/images/St. Louis/21.jpg";
import cabret from "../assets/images/St. Louis/22.jpg";
import smithkele from "../assets/images/St. Louis/23.jpg";
import goldenheart from "../assets/images/St. Louis/24.jpg";
import toimpress from "../assets/images/St. Louis/25.jpg";
import redberry from "../assets/images/St. Louis/26.jpg";
import kennedysmith from "../assets/images/St. Louis/27.jpg";
import bornking from "../assets/images/St. Louis/28.jpg";
import louisautograph from "../assets/images/St. Louis/29.jpg";
import doubleshot from "../assets/images/St. Louis/30.jpg";
import blackberryDeodorant from "../assets/images/St. Louis/31.jpg";
import blackcodeDeodorant from "../assets/images/St. Louis/32.jpg";
import maninblackDeodorant from "../assets/images/St. Louis/33.jpg";
import maninblueDeodorant from "../assets/images/St. Louis/34.jpg";
import blueberryDeodorant from "../assets/images/St. Louis/35.jpg";
import originalmuskDeodorant from "../assets/images/St. Louis/36.jpg";
import louisautographDeodorant from "../assets/images/St. Louis/37.jpg";
import pinkberryDeodorant from "../assets/images/St. Louis/38.jpg";
import purewhitemuskDeodorant from "../assets/images/St. Louis/39.jpg";
import machomanpourhommeDeodorant from "../assets/images/St. Louis/40.jpg";
import whitelondonDeodorant from "../assets/images/St. Louis/41.jpg";
import sexinthecityDeodorant from "../assets/images/St. Louis/42.jpg";
import blackberry10ml from "../assets/images/St. Louis/43.jpg";
import bapple10ml from "../assets/images/St. Louis/44.jpg";
import whitelondon10ml from "../assets/images/St. Louis/45.jpg";
import atoz10ml from "../assets/images/St. Louis/46.jpg";
import purerose from "../assets/images/St. Louis/47.jpg";
import puresandal from "../assets/images/St. Louis/48.jpg";
import purejasmine from "../assets/images/St. Louis/49.jpg";
import pureroseRS from "../assets/images/St. Louis/50.jpg";
import purejasmineRS from "../assets/images/St. Louis/51.jpg";
import puresandalRS from "../assets/images/St. Louis/52.jpg";
import lavenderRS from "../assets/images/St. Louis/53.jpg";
import bouquetRS from "../assets/images/St. Louis/54.jpg";
import attarful from "../assets/images/St. Louis/55.jpg";
import jasmine from "../assets/images/St. Louis/56.jpg";
import sandal from "../assets/images/St. Louis/57.jpg";
import rose from "../assets/images/St. Louis/58.jpg";
import lavender from "../assets/images/St. Louis/59.jpg";
import pinkberryRS from "../assets/images/St. Louis/60.jpg";
import blackcodeRS from "../assets/images/St. Louis/61.jpg";
import whitelondonRS from "../assets/images/St. Louis/62.jpg";
import blackberryRS from "../assets/images/St. Louis/63.jpg";
import bappleRS from "../assets/images/St. Louis/64.jpg";
import purewhitemuskRS from "../assets/images/St. Louis/65.jpg";
import lepoloRS from "../assets/images/St. Louis/66.jpg";
import sexinthecityRS from "../assets/images/St. Louis/67.jpg";
import partymagicRS from "../assets/images/St. Louis/68.jpg";
import blueberryRS from "../assets/images/St. Louis/69.jpg";
import freshroseRS from "../assets/images/St. Louis/70.jpg";
import freshlemonRS from "../assets/images/St. Louis/71.jpg";
import mixRS from "../assets/images/St. Louis/72.jpg";
import blackberry100ml from "../assets/images/St. Louis/73.jpg";
import bapple100ml from "../assets/images/St. Louis/74.jpg";
import blackberrygift from "../assets/images/St. Louis/75.jpg";
import pinkberrygift from "../assets/images/St. Louis/76.jpg";
import blackberryandpinkberrygift from "../assets/images/St. Louis/77.jpg";
import loveinthecity from "../assets/images/St. Louis/78.jpg";
import blackberryhomme from "../assets/images/St. Louis/79.jpg";
import pinkberryfemme from "../assets/images/St. Louis/80.jpg";
import unisexluxurycollection from "../assets/images/St. Louis/81.jpg";

import mellowmatte from "../assets/images/Colors Queen/1.jpg";
import shringareyeshadowpalette from "../assets/images/Colors Queen/2.jpg";
import lusciouslips from "../assets/images/Colors Queen/3.jpg";
import mattifyinglipstick from "../assets/images/Colors Queen/4.jpg";
import velourtouchhairserum from "../assets/images/Colors Queen/5.jpg";
import faceandglam from "../assets/images/Colors Queen/6.jpg";
import firstglow  from "../assets/images/Colors Queen/7.jpg";
import everflavor from "../assets/images/Colors Queen/8.jpg";
import perfectface from "../assets/images/Colors Queen/9.jpg";
import fashionclub from "../assets/images/Colors Queen/10.jpg";
import catwalk from "../assets/images/Colors Queen/11.jpg";
import contourhighlighter from "../assets/images/Colors Queen/12.jpg";
import coverconceal from "../assets/images/Colors Queen/13.jpg";
import instaglow from "../assets/images/Colors Queen/14.jpg";
import kisslips from "../assets/images/Colors Queen/15.jpg";
import beautylips from "../assets/images/Colors Queen/16.jpg";
import queenlips from "../assets/images/Colors Queen/17.jpg";
import ninetoeight from "../assets/images/Colors Queen/18.jpg";
import colorstay from "../assets/images/Colors Queen/19.jpg";
import liptint from "../assets/images/Colors Queen/20.jpg";
import intensematte from "../assets/images/Colors Queen/21.jpg";
import plummatte from "../assets/images/Colors Queen/22.jpg";
import followme from "../assets/images/Colors Queen/23.jpg";
import powdermatte from "../assets/images/Colors Queen/24.jpg";
import supermatte from "../assets/images/Colors Queen/25.jpg";
import purematte from "../assets/images/Colors Queen/26.jpg";
import hotlips from "../assets/images/Colors Queen/27.jpg";
import softmatte from "../assets/images/Colors Queen/28.jpg";
import frenchmatte from "../assets/images/Colors Queen/29.jpg";
import hyperstay from "../assets/images/Colors Queen/30.jpg";
import queenblast from "../assets/images/Colors Queen/31.jpg";
import coloraddict from "../assets/images/Colors Queen/32.jpg";
import herbalmatte from "../assets/images/Colors Queen/33.jpg";
import shadesoflove from "../assets/images/Colors Queen/34.jpg";
import lipmatte from "../assets/images/Colors Queen/35.jpg";
import rockstar from "../assets/images/Colors Queen/36.jpg";
import mattefinishcolor from "../assets/images/Colors Queen/37.jpg";
import lipsense from "../assets/images/Colors Queen/38.jpg";
import cremetouch from "../assets/images/Colors Queen/39.jpg";
import plummattelips from "../assets/images/Colors Queen/40.jpg";
import ninetoninenontranfser from "../assets/images/Colors Queen/41.jpg";
import metallic from "../assets/images/Colors Queen/42.jpg";
import superglosslipgloss from "../assets/images/Colors Queen/43.jpg";
import mattemelipgloss from "../assets/images/Colors Queen/44.jpg";
import addictionlips from "../assets/images/Colors Queen/45.jpg";
import twoinonewaterproof from "../assets/images/Colors Queen/46.jpg";
import absolutemetallic from "../assets/images/Colors Queen/47.jpg";
import lipshinner from "../assets/images/Colors Queen/48.jpg";
import organicmagiclipbalm from "../assets/images/Colors Queen/49.jpg";
import queenlip from "../assets/images/Colors Queen/50.jpg";
import babylips from "../assets/images/Colors Queen/51.jpg";
import definerlipliner from "../assets/images/Colors Queen/52.jpg";
import glimmersticks from "../assets/images/Colors Queen/53.jpg";
import lipline from "../assets/images/Colors Queen/54.jpg";
import lipcrayon from "../assets/images/Colors Queen/55.jpg";
import brighteningvitceserum from "../assets/images/Colors Queen/56.jpg";
import oilcontrolpowder from "../assets/images/Colors Queen/57.jpg";
import faceglowpowder from "../assets/images/Colors Queen/58.jpg";
import brightnesspowder from "../assets/images/Colors Queen/59.jpg";
import charmingdoublelayerpowder from "../assets/images/Colors Queen/60.jpg";
import fitforu from "../assets/images/Colors Queen/61.jpg";
import photogeniccompact from "../assets/images/Colors Queen/62.jpg";
import sunexpertcompact from "../assets/images/Colors Queen/63.jpg";
import highcover from "../assets/images/Colors Queen/64.jpg";
import oilcontrolpowderplus from "../assets/images/Colors Queen/65.jpg";
import perfectlookpowder from "../assets/images/Colors Queen/66.jpg";
import gorgeouspancake from "../assets/images/Colors Queen/67.jpg";
import truemuchoilcontrolpancake from "../assets/images/Colors Queen/68.jpg";
import highlightingcomplexion from "../assets/images/Colors Queen/69.jpg";
import highdefinition from "../assets/images/Colors Queen/70.jpg";
import revitalift from "../assets/images/Colors Queen/71.jpg";
import wonder from "../assets/images/Colors Queen/72.jpg";
import seveninonetotalrepair from "../assets/images/Colors Queen/73.jpg";
import hdsuperblendablefoundation from "../assets/images/Colors Queen/74.jpg";
import fairskinantidust from "../assets/images/Colors Queen/75.jpg";
import oilcontrolbasefoundation from "../assets/images/Colors Queen/76.jpg";
import dreamsatinfoundation from "../assets/images/Colors Queen/77.jpg";
import highcoverfoundation from "../assets/images/Colors Queen/78.jpg";
import realbasefoundation from "../assets/images/Colors Queen/79.jpg";
import excellenceflawlessfoundation from "../assets/images/Colors Queen/80.jpg";
import moussemattedreammoussefoundation from "../assets/images/Colors Queen/81.jpg";
import primerplusfoundation from "../assets/images/Colors Queen/82.jpg";
import onetwothreeperfectfoundation from "../assets/images/Colors Queen/83.jpg";
import shimmerlightbasefoundation from "../assets/images/Colors Queen/84.jpg";
import verymeperfectskinglow from "../assets/images/Colors Queen/85.jpg";
import realbaseoilfreefoundation from "../assets/images/Colors Queen/86.jpg";
import threeinoneoilfreefoundation from "../assets/images/Colors Queen/87.jpg";
import fitforufoundation from "../assets/images/Colors Queen/88.jpg";
import bbfoundation from "../assets/images/Colors Queen/89.jpg";
import lightmefoundation from "../assets/images/Colors Queen/90.jpg";
import luxlightrevitializing from "../assets/images/Colors Queen/91.jpg";
import bbfoundationcream from "../assets/images/Colors Queen/92.jpg";
import cchealthyglowcream from "../assets/images/Colors Queen/93.jpg";
import dreammoussefoundation from "../assets/images/Colors Queen/94.jpg";
import cushionconcealerstick from "../assets/images/Colors Queen/95.jpg";
import cushionliquidbeautyconcealer from "../assets/images/Colors Queen/96.jpg";
import primerandconcealer from "../assets/images/Colors Queen/97.jpg";
import contourcreamkit from "../assets/images/Colors Queen/98.jpg";
import basepattacreamfoundation from "../assets/images/Colors Queen/99.jpg";
import matteliquidconcealer from "../assets/images/Colors Queen/100.jpg";
import perfectoilfreebaseconcealer from "../assets/images/Colors Queen/101.jpg";
import faceworkconcealer from "../assets/images/Colors Queen/102.jpg";
import perfectcoveragebasefoundationcream from "../assets/images/Colors Queen/103.jpg";
import coverupconcealer from "../assets/images/Colors Queen/104.jpg";
import fixandblend from "../assets/images/Colors Queen/105.jpg";
import youngagefacebrightner from "../assets/images/Colors Queen/106.jpg";
import glimmershimmerfaceandbody from "../assets/images/Colors Queen/107.jpg";
import wetsethighlighter from "../assets/images/Colors Queen/108.jpg";
import endlesscharmfaceandbody from "../assets/images/Colors Queen/109.jpg";
import toomuchbakedhighlighter from "../assets/images/Colors Queen/110.jpg";
import glowandglow from "../assets/images/Colors Queen/111.jpg";
import diamondmakeupbase from "../assets/images/Colors Queen/112.jpg";
import primerandfine from "../assets/images/Colors Queen/113.jpg";
import perfectbalanceprimer from "../assets/images/Colors Queen/114.jpg";
import primerradiantperfecting from "../assets/images/Colors Queen/115.jpg";
import flawlessmakeupprimer from "../assets/images/Colors Queen/116.jpg";
import faceserumglow from "../assets/images/Colors Queen/117.jpg";
import bakedrouge from "../assets/images/Colors Queen/118.jpg";
import masterchrome from "../assets/images/Colors Queen/119.jpg";
import blushandcontour from "../assets/images/Colors Queen/120.jpg";
import catchthelight from "../assets/images/Colors Queen/121.jpg";
import fantasyhighlighter from "../assets/images/Colors Queen/122.jpg";
import glamhighlighter from "../assets/images/Colors Queen/123.jpg";
import spotlightglitterpalette from "../assets/images/Colors Queen/124.jpg";
import glitteringpalette from "../assets/images/Colors Queen/125.jpg";
import prettyeyes from "../assets/images/Colors Queen/126.jpg";
import gorgeouscolors from "../assets/images/Colors Queen/127.jpg";
import brilliant from "../assets/images/Colors Queen/128.jpg";
import glamhollywoodromantic from "../assets/images/Colors Queen/129.jpg";
import smokeyandhollywood28 from "../assets/images/Colors Queen/130.jpg";
import smokeyandhollywood24 from "../assets/images/Colors Queen/131.jpg";
import eyelandbabes from "../assets/images/Colors Queen/132.jpg";
import hollywoodbollywood32 from "../assets/images/Colors Queen/133.jpg";
import quickandeasyeyeshow from "../assets/images/Colors Queen/134.jpg";
import iconeyeseyeshadow from "../assets/images/Colors Queen/135.jpg";
import twinkleeyeshadow from "../assets/images/Colors Queen/136.jpg";
import fantasyfaces from "../assets/images/Colors Queen/137.jpg";
import faceflawless from "../assets/images/Colors Queen/138.jpg";
import megastarmixeyeshow from "../assets/images/Colors Queen/139.jpg";
import endlessglow from "../assets/images/Colors Queen/140.jpg";
import shineonface from "../assets/images/Colors Queen/141.jpg";
import moonstar from "../assets/images/Colors Queen/142.jpg";
import beautybar from "../assets/images/Colors Queen/143.jpg";
import dreamtouch from "../assets/images/Colors Queen/144.jpg"
import ikiteyeshadow from "../assets/images/Colors Queen/145.jpg";
import followmemakeupkit from "../assets/images/Colors Queen/146.jpg";
import makeupstudio from "../assets/images/Colors Queen/147.jpg";
import afterpartymakeupkit from "../assets/images/Colors Queen/148.jpg";
import essentialsmakeupkit from "../assets/images/Colors Queen/149.jpg";
import eyeseeyou from "../assets/images/Colors Queen/150.jpg";
import partytime from "../assets/images/Colors Queen/151.jpg";
import dreamglow from "../assets/images/Colors Queen/152.jpg";
import swagmakeupkit from "../assets/images/Colors Queen/153.jpg";
import facestudiomakeupkit from "../assets/images/Colors Queen/154.jpg";
import spectralight from "../assets/images/Colors Queen/155.jpg";
import itensitymakeupkit from "../assets/images/Colors Queen/156.jpg";
import berryandbright from "../assets/images/Colors Queen/157.jpg";
import arianamakeupkit from "../assets/images/Colors Queen/158.jpg";
import alexabakedblushing from "../assets/images/Colors Queen/159.jpg";
import timelockerfixerspray from "../assets/images/Colors Queen/160.jpg";
import fixquicklymakeupsettingspray from "../assets/images/Colors Queen/161.jpg";
import goodglowmakeupfixer from "../assets/images/Colors Queen/162.jpg";
import saubhagyawati from "../assets/images/Colors Queen/163.jpg";
import streejalmaysindoor from "../assets/images/Colors Queen/164.jpg";
import expressionsindoor from "../assets/images/Colors Queen/165.jpg";
import naturalwaterproofsindoor from "../assets/images/Colors Queen/166.jpg";
import jawalsindoor from "../assets/images/Colors Queen/167.jpg";
import blessingbridalsindoor from "../assets/images/Colors Queen/168.jpg";
import sanskritsindoor from "../assets/images/Colors Queen/169.jpg";
import skyeyesglittereyeliner from "../assets/images/Colors Queen/170.jpg";
import eyelashes from "../assets/images/Colors Queen/171.jpg";
import magneticeyelinereyelash from "../assets/images/Colors Queen/172.jpg";
import goldenpenhighteceyeliner from "../assets/images/Colors Queen/173.jpg";
import charmingdoubleeyeliner from "../assets/images/Colors Queen/174.jpg";
import eyestudio from "../assets/images/Colors Queen/175.jpg";
import glamorousultramatte from "../assets/images/Colors Queen/176.jpg";
import dynamicperfecteyelinerpen from "../assets/images/Colors Queen/177.jpg";
import supereyeliner from "../assets/images/Colors Queen/178.jpg";
import supermascara from "../assets/images/Colors Queen/179.jpg";
import blackmagiceyeliner from "../assets/images/Colors Queen/180.jpg";
import magneteyesmascara from "../assets/images/Colors Queen/181.jpg";
import eyeboostereyeliner from "../assets/images/Colors Queen/182.jpg";
import eyelashmascara from "../assets/images/Colors Queen/183.jpg";
import infallibleeyeliner from "../assets/images/Colors Queen/184.jpg";
import infalliblemascara from "../assets/images/Colors Queen/185.jpg";
import hightecheyeliner from "../assets/images/Colors Queen/186.jpg";
import hightechmascara from "../assets/images/Colors Queen/187.jpg";
import alleyeseyeliner from "../assets/images/Colors Queen/188.jpg";
import tintandliftmascara from "../assets/images/Colors Queen/189.jpg";
import regulareyeliner from "../assets/images/Colors Queen/190.jpg";
import regularmascara from "../assets/images/Colors Queen/191.jpg";
import premiumeyeliner from "../assets/images/Colors Queen/192.jpg";
import premiummascara from "../assets/images/Colors Queen/193.jpg";
import shinelineeyeliner from "../assets/images/Colors Queen/194.jpg";
import lashlookmascara from "../assets/images/Colors Queen/195.jpg";
import onestroke from "../assets/images/Colors Queen/196.jpg";
import cuteeyesloose from "../assets/images/Colors Queen/197.jpg";
import onestrockwooden from "../assets/images/Colors Queen/198.jpg";
import cuteeyeswooden from "../assets/images/Colors Queen/199.jpg";
import highintensityrevolvingeyepencil from "../assets/images/Colors Queen/200.jpg";
import hdgelkohlkajal from "../assets/images/Colors Queen/201.jpg";
import kohloflove from "../assets/images/Colors Queen/202.jpg";
import beautyforreal from "../assets/images/Colors Queen/203.jpg";
import gelkajal from "../assets/images/Colors Queen/204.jpg";
import elegantlongwear from "../assets/images/Colors Queen/205.jpg";
import softkajal from "../assets/images/Colors Queen/206.jpg";
import purewhiteautokajal from "../assets/images/Colors Queen/207.jpg";
import easybrowpencil from "../assets/images/Colors Queen/208.jpg";
import browmaster from "../assets/images/Colors Queen/209.jpg";
import colorclub from "../assets/images/Colors Queen/210.jpg";
import touchfeel from "../assets/images/Colors Queen/211.jpg";
import wetshine from "../assets/images/Colors Queen/212.jpg";
import colorcrush from "../assets/images/Colors Queen/213.jpg";
import highshinenailpaint from "../assets/images/Colors Queen/214.jpg";

import { BsChevronDown } from "react-icons/bs";
function Products({ category }) {
  const stLouisProducts  = [
    {
      image: blackberry10ml,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: blackberry,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: blackberry,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: blackberry100ml,
      name: "Blackberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: blueberry,
      name: "Blueberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: pinkberry,
      name: "Pinkberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: bapple10ml,
      name: "Bapple",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: bapple,
      name: "Bapple",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: bapple100ml,
      name: "Bapple",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: blackcode,
      name: "Black Code",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: whitelondon10ml,
      name: "White London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: whitelondon,
      name: "White London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: bluelondon,
      name: "Blue London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: blacklondon,
      name: "Black London",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: maninblack,
      name: "Man In Black",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: originalmusk,
      name: "Original Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: purewhitemusk,
      name: "Pure White Musk",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: misterlomani,
      name: "Mister Lomani",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: bluewater,
      name: "Blue Water",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: steffinei,
      name: "Steffinei",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: lepolo,
      name: "Lepolo",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: royalairforce,
      name: "Royal Air Force",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: sexinthecity,
      name: "Sex in the City",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: atoz10ml,
      name: "A to Z",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 10ml",
      mrp: "₹ 60/-",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: atoz,
      name: "A to Z",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: leopolice,
      name: "Leo Police",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: machomanpourhomme,
      name: "Macho Man Pour Homme",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: maninblue,
      name: "Man In Blue",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: cabret,
      name: "Cabret",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: smithkele,
      name: "Smith Kele",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: goldenheart,
      name: "Golden Heart",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: toimpress,
      name: "To Impress",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: redberry,
      name: "Redberry",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: kennedysmith,
      name: "Kennedy Smith",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: bornking,
      name: "Born King",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: louisautograph,
      name: "Louis Autograph",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: doubleshot,
      name: "Double Shot",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: blackberryDeodorant,
      name: "BlackBerry",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: blackcodeDeodorant,
      name: "Black Code",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: maninblackDeodorant,
      name: "Man in Black",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: maninblueDeodorant,
      name: "Man in Blue",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: blueberryDeodorant,
      name: "BlueBerry",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: originalmuskDeodorant,
      name: "Original Musk",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: louisautographDeodorant,
      name: "Louis Autograph",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: pinkberryDeodorant,
      name: "PinkBerry",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: purewhitemuskDeodorant,
      name: "Pure White Musk",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: machomanpourhommeDeodorant,
      name: "Macho Man Pour Homme",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: whitelondonDeodorant,
      name: "White London",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: sexinthecityDeodorant,
      name: "Sex in the City",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: loveinthecity,
      name: "Love in the City",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288",
    },
    {
      image: purerose,
      name: "Pure Rose",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: puresandal,
      name: "Pure Sandal",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 30ml",
      mrp: "₹ 189/-",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 50ml",
      mrp: "₹ 288/-",
    },
    {
      image: purejasmine,
      name: "Pure Jasmine",
      model: "EAU DE PARFUM",
      availablevaraints: "Available in: 100ml",
      mrp: "₹ 417/-",
    },
    {
      image: pureroseRS,
      name: "Pure Rose",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: purejasmineRS,
      name: "Pure Jasmine",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: puresandalRS,
      name: "Pure Sandal",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: lavenderRS,
      name: "Lavender",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: bouquetRS,
      name: "Bouquet",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: attarful,
      name: "Attarful",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: jasmine,
      name: "Jasmine",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: sandal,
      name: "Sandal",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: rose,
      name: "Rose",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: lavender,
      name: "Lavender",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: pinkberryRS,
      name: "Pinkberry",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: blackcodeRS,
      name: "Black Code",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: blackberryRS,
      name: "Blackberry",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: whitelondonRS,
      name: "White London",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: bappleRS,
      name: "Bapple",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: purewhitemuskRS,
      name: "Pure White Musk",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: lepoloRS,
      name: "Lepolo",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: sexinthecityRS,
      name: "Sex in the City",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: partymagicRS,
      name: "Party Magic",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: blueberryRS,
      name: "Blueberry",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: freshroseRS,
      name: "Fresh Rose",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: freshlemonRS,
      name: "Fresh Lemon",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: mixRS,
      name: "Mix",
      model: "Room Freshner",
      availablevaraints: "Available in: 250ml",
      mrp: "₹ 198/-",
    },
    {
      image: blackberrygift,
      name: "Blackberry",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 504/-",
    },
    {
      image: pinkberrygift,
      name: "Pinkberry",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 504/-",
    },
    {
      image: blackberryandpinkberrygift,
      name: "Blackberry & Pinkberry",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 749/-",
    },
    {
      image: blackberryhomme,
      name: "Blackberry Homme",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 630/-",
    },
    {
      image: pinkberryfemme,
      name: "Pinkberry Femme",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 630/-",
    },
    {
      image: unisexluxurycollection,
      name: "Unisex Luxury Collection",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 630/-",
    },

  ];
  const colorQueenProducts = [
    {
      image: mellowmatte,
      name: "Mellow Matte Lip Cream",
      model: "LC-20",
      availablevaraints: "Available in 20 shades",
      mrp: "₹ 299/-",
    },
    {
      image: shringareyeshadowpalette,
      name: "Shringar Eyeshadow Palette",
      model: "EM-36",
      availablevaraints: "Available",
      mrp: "₹ 625/-",
    },
    {
      image: lusciouslips,
      name: "Luscious Lips",
      model: "DL-1242",
      availablevaraints: "Available in 24 shades",
      mrp: "₹ 325/-",
    },
    {
      image: mattifyinglipstick,
      name: "Mattifying Liquid Lipstick",
      model: "NTG-20",
      availablevaraints: "Available in 20 shades",
      mrp: "₹ 249/-",
    },
    {
      image: velourtouchhairserum,
      name: "Velour Touch Hair Serum",
      model: "HS-01",
      availablevaraints: "Available",
      mrp: "₹ 399/-",
    },
    {
      image: faceandglam,
      name: "Face & Glam Makeup Kit",
      model: "NE-01",
      availablevaraints: "Available",
      mrp: "₹ 599/-",
    },
    {
      image: firstglow,
      name: "First Glow Makeup Kit",
      model: "NE-02",
      availablevaraints: "Available",
      mrp: "₹ 599/-",
    },
    {
      image: everflavor,
      name: "Ever Flavor Professional Makeup Kit",
      model: "NE-16",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 389/-",
    },
    {
      image: perfectface,
      name: "Perfect Face Makeup Kit",
      model: "NE-17",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 379/-",
    },
    {
      image: fashionclub,
      name: "Fashion Club Matte Eyeshadow & Blusher Palette",
      model: "NE-19",
      availablevaraints: "Available",
      mrp: "₹ 349/-",
    },
    {
      image: catwalk,
      name: "CAT WALK Makeup Kit",
      model: "MK-41",
      availablevaraints: "Available",
      mrp: "₹ 1149/-",
    },
    {
      image: contourhighlighter,
      name: "CONTOUR & HIGHLIGHTER Palette",
      model: "NE-08",
      availablevaraints: "Available",
      mrp: "₹ 699/-",
    },
    {
      image: coverconceal,
      name: "COVER & CONCEAL",
      model: "CU-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 199/-",
    },
    {
      image: instaglow,
      name: "INSTA GLOW HIGHLIGHTING STICK",
      model: "NE-09",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 299/-",
    },
    {
      image: kisslips,
      name: "KISS LIPS Non-Transfer Lipstick",
      model: "3330",
      availablevaraints: "Available in 24 shades",
      mrp: "₹ 399/-",
    },
    {
      image: beautylips,
      name: "BEAUTY LIPS Non-Transfer Lipstick",
      model: "NTS-1462",
      availablevaraints: "Available in 47 shades",
      mrp: "₹ 249/-",
    },
    {
      image: queenlips,
      name: "QUEEN LIPS Non-Transfer Lipstick",
      model: "NTS-9590",
      availablevaraints: "Available in 51 shades",
      mrp: "₹ 299/-",
    },
    {
      image: ninetoeight,
      name: "9 To 8 Non-Transfer Lipstick",
      model: "NTS-4361",
      availablevaraints: "Available in 36 shades",
      mrp: "₹ 299/-",
    },
    {
      image: colorstay,
      name: "COLOR STAY",
      model: "NTS-0918",
      availablevaraints: "Available in 23 shades",
      mrp: "₹ 299/-",
    },
    {
      image: liptint,
      name: "LIPS TINT Cheek Eyelid",
      model: "LP-09",
      availablevaraints: "Available in 7 shades",
      mrp: "₹ 199/-",
    },
    {
      image: intensematte,
      name: "Intense Matte Lipstick",
      model: "ML-76",
      availablevaraints: "Available in Red, Mix and Mehroon Shades",
      mrp: "₹ 150/-",
    },
    {
      image: plummatte,
      name: "PLUM MATTE Lipstick",
      model: "ML-58",
      availablevaraints: "Available in A, B, Red and Maroon Shades",
      mrp: "₹ 149/-",
    },
    {
      image: followme,
      name: "FOLLOW ME Lipstick",
      model: "ML-66",
      availablevaraints: "Available in Red & Mix Shades",
      mrp: "₹ 125/-",
    },
    {
      image: powdermatte,
      name: "POWDER MATTE Lipstick",
      model: "ML-56",
      availablevaraints: "Available in A, B, Red & Mehroon",
      mrp: "₹ 149/-",
    },
    {
      image: supermatte,
      name: "SUPER MATTE Flat Velvet Lipstick",
      model: "MLT-32",
      availablevaraints: "Available in Mix Shades",
      mrp: "₹ 189/-",
    },
    {
      image: purematte,
      name: "PURE MATTE Lipstick",
      model: "ML-36",
      availablevaraints: "Available in only Red Shades",
      mrp: "₹ 120/-",
    },
    {
      image: hotlips,
      name: "HOT LIPS Matte Lipstick",
      model: "ML-46",
      availablevaraints: "Available in Red & Mix Shades",
      mrp: "₹ 125/-",
    },
    {
      image: softmatte,
      name: "SOFT MATTE Lipstick",
      model: "SM-16",
      availablevaraints: "Available in Red & Mix Shades",
      mrp: "₹ 125/-",
    },
    {
      image: frenchmatte,
      name: "FRENCH MATTE Lipstick",
      model: "FM-12",
      availablevaraints: "Available in Mix Shades",
      mrp: "₹ 199/-",
    },
    {
      image: hyperstay,
      name: "HYPER STAY Matte Lipstick",
      model: "ML-59",
      availablevaraints: "Available in A, B and Red Shades",
      mrp: "₹ 179/-",
    },
    {
      image: queenblast,
      name: "QUEEN BLAST Glittering Matte",
      model: "GL-12",
      availablevaraints: "Available in 13 Shades",
      mrp: "₹ 299/-",
    },
    {
      image: coloraddict,
      name: "COLOR ADDICT Matte Lipstick",
      model: "MLT-12",
      availablevaraints: "Available in 13 Shades",
      mrp: "₹ 249/-",
    },
    {
      image: herbalmatte,
      name: "HERBAL MATTE Lip Pencil",
      model: "CQSL-44",
      availablevaraints: "Available in A & B Shades",
      mrp: "₹ 125/-",
    },
    {
      image: shadesoflove,
      name: "SHADES OF LOVE Matte Lipstick",
      model: "5 IN 1",
      availablevaraints: "Available in 3 Shades",
      mrp: "₹ 265/-",
    },
    {
      image: lipmatte,
      name: "LIP MATTE Long Lasting Gloss + Matte Lipstick (2in1)",
      model: "LSL-21",
      availablevaraints: "Available in 52 Shades",
      mrp: "₹ 249/-",
    },
    {
      image: rockstar,
      name: "ROCK STAR Lipstick",
      model: "RS-06",
      availablevaraints: "Available in 6 Shades",
      mrp: "₹ 399/-",
    },
    {
      image: mattefinishcolor,
      name: "MATTE FINISH COLOR Glamorous Silky Lipstick",
      model: "RM-01",
      availablevaraints: "Available in 22 Shades",
      mrp: "₹ 189/-",
    },
    {
      image: lipsense,
      name: "Lipsense Matte Lipstick",
      model: "ML-57",
      availablevaraints: "Available",
      mrp: "₹ 150/-",
    },
    {
      image: cremetouch,
      name: "Creme Touch Non-Transfer Lip Color ",
      model: "NTG-13",
      availablevaraints: "Available in 28 Shades",
      mrp: "₹ 250/-",
    },
    {
      image: plummattelips,
      name: "PLUM MATTE LIPS COLOR",
      model: "GN-30",
      availablevaraints: "Available in 32 Shades",
      mrp: "₹ 150/-",
    },
    {
      image: ninetoninenontranfser,
      name: "9TO9 Non Transfer Lipgloss",
      model: "NTG-14",
      availablevaraints: "Available in A, B, Red & Mahroon Shades",
      mrp: "₹ 250/-",
    },
    {
      image: metallic,
      name: "METALLIC Waterproof Lipgloss",
      model: "MG-15",
      availablevaraints: "Available in 18 Shades",
      mrp: "₹ 299/-",
    },
    {
      image: superglosslipgloss,
      name: "SUPER GLOSS Lipgloss",
      model: "NTG-12",
      availablevaraints: "Available in A, B, Red, Nude & Mehroon Shades",
      mrp: "₹ 225/-",
    },
    {
      image: mattemelipgloss,
      name: "MATTE ME Lipgloss",
      model: "LMG-30",
      availablevaraints: "Available in A, B, Red & Maroon Shades",
      mrp: "₹ 199/-",
    },
    {
      image: addictionlips,
      name: "ADDICTION LIPS",
      model: "AL-24",
      availablevaraints: "Available in A, B & Red Shades",
      mrp: "₹ 150/-",
    },
    {
      image: twoinonewaterproof,
      name: "2 IN 1 Waterproof Lipgloss",
      model: "NTG-30 & 31",
      availablevaraints: "Available in A & B Shades",
      mrp: "₹ 99/-",
    },
    {
      image: absolutemetallic,
      name: "ABSOLUTE METTALLIC Lipgloss",
      model: "AM-02",
      availablevaraints: "Available in Red & Mix Shades",
      mrp: "₹ 220/-",
    },
    {
      image: lipshinner,
      name: "LIP SHINNER Transparent Shiny",
      model: "LS-01",
      availablevaraints: "Available",
      mrp: "₹ 150/-",
    },
    {
      image: organicmagiclipbalm,
      name: "ORGANIC Magic Lipbalm",
      model: "MLB-01",
      availablevaraints: "Available",
      mrp: "₹ 120/-Pc",
    },
    {
      image: queenlip,
      name: "QUEEN LIPS",
      model: "MLB-02",
      availablevaraints: "Available",
      mrp: "₹ 75/-",
    },
    {
      image: babylips,
      name: "BABY LIPS NATURAL LIPSTICK",
      model: "LG-01",
      availablevaraints: "Available in Mix Shades",
      mrp: "₹ 149/-",
    },
    {
      image: definerlipliner,
      name: "DEFINER Lip Liner Pencil",
      model: "LP-22",
      availablevaraints: "Available in 33 Shades",
      mrp: "₹ 39/-",
    },
    {
      image: glimmersticks,
      name: "GLIMMER STICKS Eye & Lip Pencil with Sharpener",
      model: "LPS-08",
      availablevaraints: "Available in 28 Shades",
      mrp: "₹ 39/-",
    },
    {
      image: lipline,
      name: "LIP LINE Lip + Eye Liner Pencil",
      model: "LL-13",
      availablevaraints: "Available in 20 Shades",
      mrp: "₹ 25/-",
    },
    {
      image: lipcrayon,
      name: "Lip Crayon Non Transfer",
      model: "CR-20",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: brighteningvitceserum,
      name: "BRIGHTENING SERUM VIT-C+E",
      model: "V-01",
      availablevaraints: "Available",
      mrp: "₹ 235/-",
    },
    {
      image: oilcontrolpowder,
      name: "OIL CONTROL POWDER SPF-15",
      model: "PD-01",
      availablevaraints: "Available IN 5 shades",
      mrp: "₹ 399/-",
    },
    {
      image: faceglowpowder,
      name: "FACE GLOW Powder",
      model: "PD-02",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 399/-",
    },
    {
      image: brightnesspowder,
      name: "BRIGHTNESS Powder",
      model: "PD-03",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 350/-",
    },
    {
      image: charmingdoublelayerpowder,
      name: "CHARMING Double Layer Powder",
      model: "PD-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: fitforu,
      name: "FIT FOR U 2 in 1 Powder",
      model: "PD-05",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 265/-",
    },
    {
      image: photogeniccompact,
      name: "PHOTOGENIC COMPACT",
      model: "PD-06",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 299/-",
    },
    {
      image: sunexpertcompact,
      name: "SUN EXPERT COMPACT",
      model: "CS-04",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 325/-",
    },
    {
      image: highcover,
      name: "HIGH COVER",
      model: "SC-01",
      availablevaraints: "Available in 7 shades",
      mrp: "₹ 225/-",
    },
    {
      image: oilcontrolpowderplus,
      name: "OIL CONTROL POWDER PLUS",
      model: "PC-02",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: perfectlookpowder,
      name: "PERFECT LOOK Powder + Concealer",
      model: "PC-03",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 299/-",
    },
    {
      image: gorgeouspancake,
      name: "GORGEOUS Pan Cake",
      model: "PC-011",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 399/-",
    },
    {
      image: truemuchoilcontrolpancake,
      name: "TRUE MUCH Oil Control Pan Cake",
      model: "PC-12",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 225/-",
    },
    {
      image: highlightingcomplexion,
      name: "HIGHLIGHTING COMPLEXION LOOSE POWDER + COMPACT",
      model: "LP-01",
      availablevaraints: "Available in 1, 2 & Mix shades",
      mrp: "₹ 349/-",
    },
    {
      image: highdefinition,
      name: "HIGH DEFINITION Mirror Smooth 4 Color Makeup Powder",
      model: "LP-04",
      availablevaraints: "Available",
      mrp: "₹ 349/-",
    },
    {
      image: revitalift,
      name: "REVITALIFT Base + Foundation",
      model: "RF-09",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 549/-",
    },
    {
      image: wonder,
      name: "WONDER 2 Powder + Base Foundation",
      model: "CT-01",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 325/-",
    },
    {
      image: seveninonetotalrepair,
      name: "7 in 1 TOTAL REPAIR Spiral Two Tone Beauty Luxury",
      model: "TR-07",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 649/-",
    },
    {
      image: hdsuperblendablefoundation,
      name: "HD Super Blendable Foundation",
      model: "HDF-03",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 399/-",
    },
    {
      image: fairskinantidust,
      name: "FAIR SKIN Anti-dust Facial Cleansing Ice Crystal",
      model: "FS-111",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: oilcontrolbasefoundation,
      name: "OIL CONTROL BASE FOUNDATION",
      model: "WSF-01",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 449/-",
    },
    {
      image: dreamsatinfoundation,
      name: "DREAM SATIN Foundation",
      model: "WSF-03",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 399/-",
    },
    {
      image: highcoverfoundation,
      name: "HIGH COVER Foundation",
      model: "WSF-04",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 325/-",
    },
    {
      image: realbasefoundation,
      name: "REAL BASE FOUNDATION",
      model: "FB-07",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 449/-",
    },
    {
      image: excellenceflawlessfoundation,
      name: "EXCELLENCE FLAWLESS Foundation",
      model: "BFC-05",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 325/-",
    },
    {
      image: moussemattedreammoussefoundation,
      name: "MOUSSE MATTE Dream Mousse Foundation",
      model: "MF-01",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 499/-",
    },
    {
      image: primerplusfoundation,
      name: "PRIMER + FOUNDATION Oil Control",
      model: "PF-100",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 449/-",
    },
    {
      image: onetwothreeperfectfoundation,
      name: "123 PERFECT Foundation",
      model: "MSF-03",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 399/-",
    },
    {
      image: shimmerlightbasefoundation,
      name: "SHIMMER LIGHT Base Foundation",
      model: "FM-02",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 249/-",
    },
    {
      image: verymeperfectskinglow,
      name: "VERY ME Perfect Skin Glow",
      model: "FT-09",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 225/-",
    },
    {
      image: realbaseoilfreefoundation,
      name: "REAL BASE Oil Free Foundation",
      model: "FT-010",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 299/-",
    },
    {
      image: threeinoneoilfreefoundation,
      name: "3 in 1 Oil Free Foundation",
      model: "FT-012",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 265/-",
    },
    {
      image: fitforufoundation,
      name: "FIT FOR U Foundation",
      model: "FT-013",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 249/-",
    },
    {
      image: bbfoundation,
      name: "BB Foundation",
      model: "FT-014",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 279/-",
    },
    {
      image: lightmefoundation,
      name: "LIGHT ME Foundation",
      model: "FT-015",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: luxlightrevitializing,
      name: "LUXLIGHT REVITALIZING FOUNDATION",
      model: "FT-16",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 425/-",
    },
    {
      image: bbfoundationcream,
      name: "BB Foundation Cream",
      model: "FT-17",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 325/-",
    },
    {
      image: cchealthyglowcream,
      name: "CC Healthy Glow Cream",
      model: "CCF-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: dreammoussefoundation,
      name: "DREAM MOUSSE Foundation",
      model: "MTF-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 425/-",
    },
    {
      image: cushionconcealerstick,
      name: "CUSHION Concealer Stick",
      model: "CPS-020",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 325/-",
    },
    {
      image: cushionliquidbeautyconcealer,
      name: "CUSHION LIQUID Beauty Concealer",
      model: "CNC-02",
      availablevaraints: "Available in 5 shades",
      mrp: "₹ 225/-",
    },
    {
      image: primerandconcealer,
      name: "PRIMER & CONCEALER",
      model: "PCT-01",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 249/-",
    },
    {
      image: contourcreamkit,
      name: "CONTOUR CREAM KIT",
      model: "BK-15",
      availablevaraints: "Available",
      mrp: "₹ 449/-",
    },
    {
      image: basepattacreamfoundation,
      name: "BASE PATTA Cream Foundation",
      model: "CQ-06",
      availablevaraints: "Available in 13 shades",
      mrp: "₹ 249/-",
    },
    {
      image: matteliquidconcealer,
      name: "MATTE LIQUID CONCEALER",
      model: "LC-01",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 225/-",
    },
    {
      image: perfectoilfreebaseconcealer,
      name: "PERFECT Oil Free Base Concealer",
      model: "PS-06",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 289/-",
    },
    {
      image: faceworkconcealer,
      name: "FACE WORK Concealer",
      model: "PS-07",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 299/-",
    },
    {
      image: perfectcoveragebasefoundationcream,
      name: "PERFECT COVERAGE Base Foundation Cream 24 Hour",
      model: "BC-11",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 149/-",
    },
    {
      image: coverupconcealer,
      name: "COVER UP Concealer",
      model: "CS-09",
      availablevaraints: "Available",
      mrp: "₹ 125/-",
    },
    {
      image: fixandblend,
      name: "FIX & BLEND",
      model: "PS-08",
      availablevaraints: "Available in 9 shades",
      mrp: "₹ 475/-",
    },
    {
      image: youngagefacebrightner,
      name: "YOUNG AGE Face Brightner",
      model: "FBC-01",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 175/-",
    },
    {
      image: glimmershimmerfaceandbody,
      name: "GLIMMER Shimmer Face & Body",
      model: "BS-11",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 99/-",
    },
    {
      image: wetsethighlighter,
      name: "WET SET Highlighter",
      model: "WES-01",
      availablevaraints: "Available in 12 shades",
      mrp: "₹ 160/-",
    },
    {
      image: endlesscharmfaceandbody,
      name: "ENDLESS CHARM Face & Body Highlight Shimmer",
      model: "BS-03",
      availablevaraints: "Available in 12 shades",
      mrp: "₹ 149/-",
    },
    {
      image: toomuchbakedhighlighter,
      name: "TOO MUCH Baked Highlighter",
      model: "BH-06",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 299/-",
    },
    {
      image: glowandglow,
      name: "GLOW & GLOW Highlighter Stick",
      model: "GC-010",
      availablevaraints: "Available",
      mrp: "₹ 99/-",
    },
    {
      image: diamondmakeupbase,
      name: "DIAMOND Makeup Base",
      model: "HBD-01",
      availablevaraints: "Available in Silver shades",
      mrp: "₹ 259/-",
    },
    {
      image: primerandfine,
      name: "PRIME & FINE Beautifying Primer",
      model: "GP-04",
      availablevaraints: "Available",
      mrp: "₹ 499/-",
    },
    {
      image: perfectbalanceprimer,
      name: "PERFECT BALANCE Primer",
      model: "GP-05",
      availablevaraints: "Available",
      mrp: "₹ 325/-",
    },
    {
      image: primerradiantperfecting,
      name: "PRIMER Radiant Perfecting Primer + Finisher Base Perfectrice Illumine + fixe",
      model: "GP-08",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: flawlessmakeupprimer,
      name: "FLAWLESS MAKEUP BASE PRIMER",
      model: "WGP-06",
      availablevaraints: "Available",
      mrp: "₹ 325/-",
    },
    {
      image: faceserumglow,
      name: "FACE SERUM Glow Primer Oil",
      model: "FS-22",
      availablevaraints: "Available",
      mrp: "₹ 399/-",
    },
    {
      image: bakedrouge,
      name: "BAKED ROUGE Blusher",
      model: "BB-26",
      availablevaraints: "Available in 26 shades",
      mrp: "₹ 320/-",
    },
    {
      image: masterchrome,
      name: "MASTER CHROME",
      model: "MC-04",
      availablevaraints: "Available in 9 shades",
      mrp: "₹ 279/-",
    },
    {
      image: blushandcontour,
      name: "BLUSH & CONTOUR",
      model: "BL-05",
      availablevaraints: "Available",
      mrp: "₹ 199/-",
    },
    {
      image: catchthelight,
      name: "CATCH THE LIGHT Eye Shadow & Blusher",
      model: "SES-19",
      availablevaraints: "Available in 36 shades",
      mrp: "₹ 249/-",
    },
    {
      image: fantasyhighlighter,
      name: "FANTASY Highlighter",
      model: "FHB-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: glamhighlighter,
      name: "GLAM Highlighter",
      model: "GHB-04",
      availablevaraints: "Available in 8 shades",
      mrp: "₹ 329/-",
    },
    {
      image: spotlightglitterpalette,
      name: "SPOTLIGHT Glitter Palette",
      model: "GE-9",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 299/-",
    },
    {
      image: glitteringpalette,
      name: "GLITTERING PALETTE",
      model: "GE-15",
      availablevaraints: "Available",
      mrp: "₹ 349/-",
    },
    {
      image: prettyeyes,
      name: "PRETTY EYES 70 Colors Eyeshadow",
      model: "ES-70",
      availablevaraints: "Available",
      mrp: "₹ 999/-",
    },
    {
      image: gorgeouscolors,
      name: "GORGEOUS COLORS Body Professional Make-up",
      model: "ES-13",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 425/-",
    },
    {
      image: brilliant,
      name: "BRILLIANT 18 Colors Eyeshadow",
      model: "ES-18",
      availablevaraints: "Available",
      mrp: "₹ 199/-",
    },
    {
      image: glamhollywoodromantic,
      name: "GLAM HOLLYWOOD ROMANTIC Eyeshadow for Professional",
      model: "ES-12",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 225/-",
    },
    {
      image: smokeyandhollywood28,
      name: "SMOKEY & HOLLYWOOD 28 Eyeshadow Palette",
      model: "NE-28",
      availablevaraints: "Available",
      mrp: "₹ 349/-",
    },
    {
      image: smokeyandhollywood24,
      name: "SMOKEY & HOLLYWOOD 24 Eyeshadow Palette",
      model: "NE-24",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: eyelandbabes,
      name: "EYELAND BABES EYESHADOW (2 Color)",
      model: "ES-25",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 479/-",
    },
    {
      image: hollywoodbollywood32,
      name: "HOLLYWOOD BOLLYWOOD 32 Eyeshadow Palette",
      model: "ES-32",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 525/-",
    },
    {
      image: quickandeasyeyeshow,
      name: "QUICK & EASY Eyeshadow (1 Color)",
      model: "ES-30",
      availablevaraints: "Available",
      mrp: "₹ 325/-",
    },
    {
      image: iconeyeseyeshadow,
      name: "ICON EYES Eyeshadow",
      model: "EB-11",
      availablevaraints: "Available",
      mrp: "₹ 325/-",
    },
    {
      image: twinkleeyeshadow,
      name: "TWINKLE Eyeshadow",
      model: "ES-51",
      availablevaraints: "Available",
      mrp: "₹ 699/-",
    },
    {
      image: fantasyfaces,
      name: "FANTASY FACES",
      model: "EB-41",
      availablevaraints: "Available",
      mrp: "₹ 649/-",
    },
    {
      image: faceflawless,
      name: "FACE FLAWLESS Eyeshadow + Highlighter + Blush",
      model: "BK-41",
      availablevaraints: "Available",
      mrp: "₹ 840/-",
    },
    {
      image: megastarmixeyeshow,
      name: "MEGA STAR Mix Eyeshadow",
      model: "BK-44",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 975/-",
    },
    {
      image: endlessglow,
      name: "ENDLESS GLOW Makeup Kit",
      model: "GG-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 499/-",
    },
    {
      image: shineonface,
      name: "SHINE ON FACE",
      model: "MK-82",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 325/-",
    },
    {
      image: moonstar,
      name: "MOON STAR Body Professional Make-up",
      model: "GE-06",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 299/-",
    },
    {
      image: beautybar,
      name: "BEAUTY BAR",
      model: "MK-333",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 325/-",
    },
    {
      image: dreamtouch,
      name: "DREAM TOUCH",
      model: "TC-06",
      availablevaraints: "Available in 3 shades",
      mrp: "₹ 499/-",
    },
    {
      image: ikiteyeshadow,
      name: "I KIT Eyeshadow",
      model: "IPS-12",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 325/-",
    },
    {
      image: followmemakeupkit,
      name: "FOLLOW ME Makeup Kit",
      model: "MK-18",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 479/-",
    },
    {
      image: makeupstudio,
      name: "MAKEUP STUDIO",
      model: "MK-19",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 299/-",
    },
    {
      image: afterpartymakeupkit,
      name: "AFTER PARTY Makeup Kit",
      model: "MK-21",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 299/-",
    },
    {
      image: essentialsmakeupkit,
      name: "ESSENTIALS Makeup Kit",
      model: "MK-26",
      availablevaraints: "Available in 1 shades",
      mrp: "₹ 479/-",
    },
    {
      image: eyeseeyou,
      name: "EYE SEE YOU Makeup Kit",
      model: "MK-27",
      availablevaraints: "Available",
      mrp: "₹ 649/-",
    },
    {
      image: partytime,
      name: "PARTY TIME Makeup Kit",
      model: "MK-28",
      availablevaraints: "Available",
      mrp: "₹ 599/-",
    },
    {
      image: dreamglow,
      name: "DREAM GLOW Makeup Kit",
      model: "MK-29",
      availablevaraints: "Available",
      mrp: "₹ 749/-",
    },
    {
      image: swagmakeupkit,
      name: "SWAG Makeup Kit",
      model: "MK-33",
      availablevaraints: "Available",
      mrp: "₹ 549/-",
    },
    {
      image: facestudiomakeupkit,
      name: "FACE STUDIO Makeup Kit",
      model: "MK-40",
      availablevaraints: "Available",
      mrp: "₹ 599/-",
    },
    {
      image: spectralight,
      name: "SPECTRA LIGHT Makeup Kit",
      model: "MK-62",
      availablevaraints: "Available",
      mrp: "₹ 1399/-",
    },
    {
      image: itensitymakeupkit,
      name: "ITENSITY Makeup Kit",
      model: "MK-57",
      availablevaraints: "Available",
      mrp: "₹ 1149/-",
    },
    {
      image: berryandbright,
      name: "BERRY & BRIGHT Makeup Kit",
      model: "MK-89",
      availablevaraints: "Available",
      mrp: "₹ 1500/-",
    },
    {
      image: arianamakeupkit,
      name: "ARIANA MAKEUP KIT",
      model: "1021",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 379/-",
    },
    {
      image: alexabakedblushing,
      name: "ALEXA Baked Blushing",
      model: "TC-03",
      availablevaraints: "Available in 2 shades",
      mrp: "₹ 325/-",
    },
    {
      image: timelockerfixerspray,
      name: "TIME LOCKER Fixer Spray",
      model: "MF-012",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: fixquicklymakeupsettingspray,
      name: "FIX QUICKLY Makeup Setting Spray",
      model: "MF-013",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: goodglowmakeupfixer,
      name: "GOOD GLOW Makeup Fixer",
      model: "MFG-03",
      availablevaraints: "Available",
      mrp: "₹ 399/-",
    },
    {
      image: saubhagyawati,
      name: "SAUBHAGYAWATI Liquid Sindoor 6 + 1 Tester Free",
      model: "S-14",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 70/-",
    },
    {
      image: streejalmaysindoor,
      name: "Stree Jalmay Sindoor Waterproof",
      model: "SJ-02",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 35/-",
    },
    {
      image: expressionsindoor,
      name: "EXPRESSION SINDOOR 6 + 1 Tester Free",
      model: "",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 80/-",
    },
    {
      image: naturalwaterproofsindoor,
      name: "100% NATURAL WaterProof Sindoor",
      model: "",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 69/-",
    },
    {
      image: jawalsindoor,
      name: "JAWAL SINDOOR",
      model: "",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 99/-",
    },
    {
      image: blessingbridalsindoor,
      name: "BLESSING Bridal Liquid Sindoor Waterproof",
      model: "LS-12",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 125/-",
    },
    {
      image: sanskritsindoor,
      name: "SANSKRIT Sindoor",
      model: "LS-40",
      availablevaraints: "Available in Red & Mehroon shades",
      mrp: "₹ 149/-",
    },
    {
      image: skyeyesglittereyeliner,
      name: "SKY EYES Glitter Eyeliner",
      model: "GEL-17",
      availablevaraints: "Available in 14 shades",
      mrp: "₹ 189/-",
    },
    {
      image: eyelashes,
      name: "EYE LASHES",
      model: "EL-07",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 99/-",
    },
    {
      image: magneticeyelinereyelash,
      name: "Magnetic Eyeliner Eyelash",
      model: "EL-08",
      availablevaraints: "Available in 8 shades",
      mrp: "₹ 450/-",
    },
    {
      image: goldenpenhighteceyeliner,
      name: "GOLDEN PEN Hightec Eyeliner 12 + 1 Tester Free",
      model: "PEG-43",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: charmingdoubleeyeliner,
      name: "CHARMING Double Eyeliner",
      model: "PED-02",
      availablevaraints: "Available",
      mrp: "₹ 269/-",
    },
    {
      image: eyestudio,
      name: "EYE STUDIO Eyeliner Professional Makeup",
      model: "PE-12",
      availablevaraints: "Available",
      mrp: "₹ 150/-",
    },
    {
      image: glamorousultramatte,
      name: "GLAMOROUS ULTRA MATTE Finish Eyeliner 6 + 1 Tester Free",
      model: "PE-02",
      availablevaraints: "Available",
      mrp: "₹ 185/-",
    },
    {
      image: dynamicperfecteyelinerpen,
      name: "DYNAMIC Perfect Eyeliner Pen",
      model: "PE-01",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: supereyeliner,
      name: "SUPER Eyeliner",
      model: "L-001",
      availablevaraints: "Available",
      mrp: "₹ 180/-",
    },
    {
      image: supermascara,
      name: "SUPER Mascara",
      model: "M-001",
      availablevaraints: "Available",
      mrp: "₹ 180/-",
    },
    {
      image: blackmagiceyeliner,
      name: "BLACK MAGIC Eyeliner",
      model: "L-003",
      availablevaraints: "Available",
      mrp: "₹ 199/-",
    },
    {
      image: magneteyesmascara,
      name: "MAGNETEYES Mascara",
      model: "M-003",
      availablevaraints: "Available",
      mrp: "₹ 255/-",
    },
    {
      image: eyeboostereyeliner,
      name: "EYE BOOSTER Eyeliner",
      model: "L-004",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: eyelashmascara,
      name: "EYELASH Mascara",
      model: "M-004",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: infallibleeyeliner,
      name: "INFALLIBLE Eyeliner",
      model: "L-006",
      availablevaraints: "Available",
      mrp: "₹ 199/-",
    },
    {
      image: infalliblemascara,
      name: "INFALLIBLE Mascara",
      model: "M-006",
      availablevaraints: "Available",
      mrp: "₹ 199/-",
    },
    {
      image: hightecheyeliner,
      name: "HIGH-TECH Eyeliner",
      model: "L-07",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: hightechmascara,
      name: "HIGH-TECH Mascara",
      model: "M-07",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: alleyeseyeliner,
      name: "ALL EYES Eyeliner",
      model: "L-005",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: tintandliftmascara,
      name: "TINT & LIFT Mascara",
      model: "M-005",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: regulareyeliner,
      name: "REGULAR Eyeliner 12 + 2 Tester Free",
      model: "RE-12",
      availablevaraints: "Available",
      mrp: "₹ 65/-",
    },
    {
      image: regularmascara,
      name: "REGULAR Mascara 12 + 2 Tester Free",
      model: "RM-11",
      availablevaraints: "Available",
      mrp: "₹ 65/-",
    },
    {
      image: premiumeyeliner,
      name: "PREMIUM Eyeliner 12 + 2 Tester Free",
      model: "PE-22",
      availablevaraints: "Available",
      mrp: "₹ 120/-",
    },
    {
      image: premiummascara,
      name: "PREMIUM Mascara 12 + 2 Tester Free",
      model: "PM-22",
      availablevaraints: "Available",
      mrp: "₹ 120/-",
    },
    {
      image: shinelineeyeliner,
      name: "SHINE LINE Eyeliner",
      model: "L-008",
      availablevaraints: "Available",
      mrp: "₹ 245/-",
    },
    {
      image: lashlookmascara,
      name: "LASH LOOK Mascara",
      model: "M-008",
      availablevaraints: "Available",
      mrp: "₹ 275/-",
    },
    {
      image: onestroke,
      name: "ONE STROKE Khol Kajal Eye Liner",
      model: "PK-01",
      availablevaraints: "Available",
      mrp: "₹ 269/-",
    },
    {
      image: cuteeyesloose,
      name: "CUTE EYES Loose Auto Revolving Kajal",
      model: "AK-02",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: onestrockwooden,
      name: "ONE STROCK Wooden",
      model: "PKW-01",
      availablevaraints: "Available",
      mrp: "₹ 269/-",
    },
    {
      image: cuteeyeswooden,
      name: "CUTE EYES Wooden",
      model: "AKW-02",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: highintensityrevolvingeyepencil,
      name: "HIGH INTENSITY Revolving Eye Pencil with Sharpner",
      model: "PK-01",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: hdgelkohlkajal,
      name: "HD Gel Kohl Kajal Card Packing",
      model: "AK-02",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: kohloflove,
      name: "KOHL OF LOVE Gel Kajal Card Packing",
      model: "KA-02",
      availablevaraints: "Available",
      mrp: "₹ 149/-",
    },
    {
      image: beautyforreal,
      name: "BEAUTY FOR REAL Gel Khol Kajal Auto Eye Pencil 12 + 1 Tester Free",
      model: "AK-03",
      availablevaraints: "Available",
      mrp: "₹ 225/-",
    },
    {
      image: gelkajal,
      name: "GEL KAJAL 2 in 1 Cake Eyeliner",
      model: "GKT-02",
      availablevaraints: "Available",
      mrp: "₹ 349/-",
    },
    {
      image: elegantlongwear,
      name: "ELEGANT Long Wear",
      model: "GK-01",
      availablevaraints: "Available",
      mrp: "₹ 299/-",
    },
    {
      image: softkajal,
      name: "SOFT KAJAL 6 + 1 Tester Free",
      model: "SF-011",
      availablevaraints: "Available",
      mrp: "₹ 125/-",
    },
    {
      image: purewhiteautokajal,
      name: "PURE WHITE AUTO KAJAL 12 + 1 Tester Free",
      model: "WAK-01",
      availablevaraints: "Available",
      mrp: "₹ 249/-",
    },
    {
      image: easybrowpencil,
      name: "EASY BROW Easy Brow Pencil",
      model: "EB-01",
      availablevaraints: "Available",
      mrp: "₹ 45/- Pc",
    },
    {
      image: browmaster,
      name: "BROW MASTER Zed Black & Brown (6 + 1 Tester Free)",
      model: "EB-03",
      availablevaraints: "Available",
      mrp: "₹ 169/-",
    },
    {
      image: colorclub,
      name: "COLOR CLUB Nail Polish (Box of 12 pcs)",
      model: "CC-24",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 99/-",
    },
    {
      image: touchfeel,
      name: "TOUCH FEEL Nail polish",
      model: "O-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 99/-",
    },
    {
      image: wetshine,
      name: "WET SHINE Nail Polish (Box of 24 Pcs.) ",
      model: "WS-25",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 99/-",
    },
    {
      image: colorcrush,
      name: "COLOR CRUSH Nail Polish",
      model: "BG-068",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 99/-",
    },
    {
      image: highshinenailpaint,
      name: "HIGH SHINE NAIL PAINT",
      model: "HNS-100",
      availablevaraints: "Available in 6 shades",
      mrp: "₹ 99/-",
    },
  ];
  const defaultProducts  = [
    {
      image: blackberryandpinkberrygift,
      name: "Blackberry & Pinkberry",
      model: "Premium Gift Set",
      availablevaraints: "Available",
      mrp: "₹ 749/-",
    },
    {
      image: charmingdoublelayerpowder,
      name: "CHARMING Double Layer Powder",
      model: "PD-04",
      availablevaraints: "Available in 4 shades",
      mrp: "₹ 299/-",
    },
    {
      image: ninetoninenontranfser,
      name: "9TO9 Non Transfer Lipgloss",
      model: "NTG-14",
      availablevaraints: "Available in A, B, Red & Mahroon Shades",
      mrp: "₹ 250/-",
    },
    {
      image: blackcodeDeodorant,
      name: "Black Code",
      model: "Deodorant Body Spray",
      availablevaraints: "Available in: 200ml",
      mrp: "₹ 279/-",
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Products mapping for easier reference
  const productsByCategory = {
    'St. Louis': stLouisProducts,
    'Color Queen': colorQueenProducts,
    'default': defaultProducts,
  };

  // // Determine which products to display
  // let products;
  // if (category === 'St. Louis') {
  //   products = stLouisProducts;
  // } else if (category === 'Color Queen') {
  //   products = colorQueenProducts;
  // } else {
  //   products = defaultProducts; // Default products if no category is selected
  // }

  // Determine which products to display based on category
  useState(() => {
    if (category && productsByCategory[category]) {
      setDisplayedProducts(productsByCategory[category]);
      setShowAll(false); // Only show "Show All" for default category
    } else {
      setDisplayedProducts(defaultProducts);
      setShowAll(true);
    }
  }, [category]);

  // Handler for "Show All" toggle
  const handleShowAll = () => {
    setDisplayedProducts([...stLouisProducts, ...colorQueenProducts, ...defaultProducts]);
    setShowAll(false); // Hide button after showing all
  };

  // const products = category === 'St. Louis' ? stLouisProducts : colorQueenProducts;
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
        <h2>{category ? `${category} Products` : "Featured Products"}</h2>
        {showAll && <button onClick={handleShowAll}>Show All</button>}
        </div>
        <div className="products">
          {displayedProducts.map(({ image, name, model, availablevaraints, mrp }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <h4>{model}</h4>
                <hr />
                <div className="availablevaraints">
                  <img src={availablevaraintimage} alt="availablevaraints" />
                  <h4>Available Variants</h4>
                  <p>{availablevaraints}</p>
                </div>
                <div className="mrp">
                  <img src={mrpimage} alt="mrp" />
                  <h4>MRP</h4>
                  <p>{mrp}</p>
                </div>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
