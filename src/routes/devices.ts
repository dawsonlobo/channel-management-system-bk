import express from "express";
import { DeviceModel } from "../models/devices";

const router = express.Router();

/**
 * @swagger
 * /devices:
 *   post:
 *     summary: Create a new device
 *     tags: [Device]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceName:
 *                 type: string
 *                 description: Name of the device
 *               ipAddress:
 *                 type: string
 *                 description: IP address of the device
 *               portNumber:
 *                 type: string
 *                 description: Port number associated with the device
 *               deviceType:
 *                 type: string
 *                 enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *                 description: Type of the device
 *               status:
 *                 type: string
 *                 enum: ['ACTIVE', 'INACTIVE']
 *                 description: Status of the device
 *           example:
 *             deviceName: "Main Entrance CCTV"
 *             ipAddress: "192.168.1.10"
 *             portNumber: "8080"
 *             deviceType: "CCTV"
 *             status: "ACTIVE"
 *     responses:
 *       200:
 *         description: Device added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Success message
 *                 data:
 *                   type: object
 *                   description: Created device details
 *             example:
 *               status: "Device added successfully"
 *               data:
 *                 _id: "65f2d5b8a29e3b001e3a8bcd"
 *                 deviceName: "Main Entrance CCTV"
 *                 ipAddress: "192.168.1.10"
 *                 portNumber: "8080"
 *                 deviceType: "CCTV"
 *                 status: "ACTIVE"
 */
router.post("/devices", async (req, res) => {
  try {
    const device = new DeviceModel(req.body);
    await device.save();
    res.status(200).json({
      status: "Device added successfully",
      data: device,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});


/**
 * @swagger
 * /devices/getall:
 *   post:
 *     summary: Get all devices
 *     tags: [Device]
 *     responses:
 *       200:
 *         description: A list of all registered devices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Unique identifier for the device
 *                   deviceName:
 *                     type: string
 *                     description: Name of the device
 *                   ipAddress:
 *                     type: string
 *                     description: IP address of the device
 *                   portNumber:
 *                     type: string
 *                     description: Port number associated with the device
 *                   deviceType:
 *                     type: string
 *                     enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *                     description: Type of the device
 *                   status:
 *                     type: string
 *                     enum: ['ACTIVE', 'INACTIVE']
 *                     description: Status of the device
 *             example:
 *               - _id: "65f2d5b8a29e3b001e3a8bcd"
 *                 deviceName: "Main Entrance CCTV"
 *                 ipAddress: "192.168.1.10"
 *                 portNumber: "8080"
 *                 deviceType: "CCTV"
 *                 status: "ACTIVE"
 *               - _id: "65f2d5b8a29e3b001e3a8bce"
 *                 deviceName: "Office Biometric"
 *                 ipAddress: "192.168.1.20"
 *                 portNumber: "9090"
 *                 deviceType: "BIOMETRIC"
 *                 status: "INACTIVE"
 */
router.post("/devices/getall", async (req, res) => {
  try {
    const devices = await DeviceModel.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch devices" });
  }
});


/**
 * @swagger
 * /devices/{id}:
 *   post:
 *     summary: Get a device by ID
 *     tags: [Device]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the device
 *     responses:
 *       200:
 *         description: The requested device details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Unique identifier for the device
 *                 deviceName:
 *                   type: string
 *                   description: Name of the device
 *                 ipAddress:
 *                   type: string
 *                   description: IP address of the device
 *                 portNumber:
 *                   type: string
 *                   description: Port number associated with the device
 *                 deviceType:
 *                   type: string
 *                   enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *                   description: Type of the device
 *                 status:
 *                   type: string
 *                   enum: ['ACTIVE', 'INACTIVE']
 *                   description: Status of the device
 *             example:
 *               _id: "65f2d5b8a29e3b001e3a8bcd"
 *               deviceName: "Main Entrance CCTV"
 *               ipAddress: "192.168.1.10"
 *               portNumber: "8080"
 *               deviceType: "CCTV"
 *               status: "ACTIVE"
 */

router.post("/devices/:id", async (req, res): Promise<void> => {
  try {
    const device = await DeviceModel.findById(req.params.id);
    if (!device) {
      res.status(404).json({ error: "Device not found" });
      return;
    }
    res.json(device);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch device" });
  }
});

/**
 * @swagger
 * /devices/{id}:
 *   put:
 *     summary: Update a device by ID
 *     tags: [Device]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the device to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceName:
 *                 type: string
 *                 description: Name of the device
 *               ipAddress:
 *                 type: string
 *                 description: IP address of the device
 *               portNumber:
 *                 type: string
 *                 description: Port number associated with the device
 *               deviceType:
 *                 type: string
 *                 enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *                 description: Type of the device
 *               status:
 *                 type: string
 *                 enum: ['ACTIVE', 'INACTIVE']
 *                 description: Status of the device
 *           example:
 *             deviceName: "Updated Entrance CCTV"
 *             ipAddress: "192.168.1.11"
 *             portNumber: "9090"
 *             deviceType: "CCTV"
 *             status: "ACTIVE"
 *     responses:
 *       200:
 *         description: Device updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Unique identifier for the device
 *                 deviceName:
 *                   type: string
 *                   description: Name of the device
 *                 ipAddress:
 *                   type: string
 *                   description: IP address of the device
 *                 portNumber:
 *                   type: string
 *                   description: Port number associated with the device
 *                 deviceType:
 *                   type: string
 *                   enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *                   description: Type of the device
 *                 status:
 *                   type: string
 *                   enum: ['ACTIVE', 'INACTIVE']
 *                   description: Status of the device
 *             example:
 *               _id: "65f2d5b8a29e3b001e3a8bcd"
 *               deviceName: "Updated Entrance CCTV"
 *               ipAddress: "192.168.1.11"
 *               portNumber: "9090"
 *               deviceType: "CCTV"
 *               status: "ACTIVE"
 */
router.put("/devices/:id", async (req, res): Promise<void> => {
  try {
    const device = await DeviceModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!device) {
      res.status(404).json({ error: "Device not found" });
      return;
    }
    res.json(device);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});


export default router;
