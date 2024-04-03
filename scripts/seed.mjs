import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();


async function insertDummyData() {
  try {
    const dummyData = []; // Explicit type annotation for the array
    const numRecords = 10; // Change this number to the desired amount of dummy data

    for (let i = 0; i < numRecords; i++) {
      dummyData.push({
        temperature: getRandomFloat(20, 30),
        humidity: getRandomFloat(50, 70),
        soilHumidity: getRandomInt(60, 80),
        ppm: getRandomInt(700, 900)
      });
    }

    await prisma.sensorData.createMany({
      data: dummyData
    });

    console.log(`${numRecords} dummy records inserted successfully.`);
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

function getRandomFloat(min, max){
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//insertDummyData();

async function fetchData(){
    try {
        const allData = await prisma.sensorData.findMany();
        console.log(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

fetchData();