const express = require('express');
const path = require('path');

const app = express();

// Middleware สำหรับแปลงข้อมูล body เป็น JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*app.use(cors({
    //origin: 'https://restapi.tu.ac.th/', // อนุญาตให้เฉพาะโดเมนนี้เข้าถึง
    methods: ['GET', 'POST'], // กำหนด method ที่อนุญาต
    allowedHeaders: ['Content-Type', 'Authorization'], // กำหนด headers ที่อนุญาต
}));*/

app.post('/api/users', (req, res)=> {
    // รับข้อมูลจาก body ที่ส่งมาจาก client
    const { username, password } = req.body;
    console.log(req.body); // ตรวจสอบข้อมูลที่รับเข้ามา

    

    // คุณสามารถจัดการข้อมูลได้ตามที่ต้องการ (เช่นบันทึกลงฐานข้อมูล)
    // ส่งการตอบกลับไปยัง client
    res.status(200).json({
        message: 'Data received successfully',
        data: { username, password }
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
