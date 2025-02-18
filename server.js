import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import extraServices from './routes/extra-services.js';
import searchKB from './routes/search-kb.js';
import ticketRoute from './routes/ticket.js'
import contactReasonRoute from './routes/contact-reason.js';
import operatingSystemRoute from './routes/operating-system.js';
import priorityRoute from './routes/priority.js';
import quadrupleProductLineRoute from './routes/quadruple-product-line.js';
import quadrupleProcedureRoute from './routes/quadruple-procedure.js';
import quadrupleAreaRoute from './routes/quadruple-area.js';
import quadrupleModuleRoute from './routes/quadruple-module.js';
import programModuleRoute from './routes/program-module.js';
import procedureModuleRoute from './routes/procedure-module.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;
const isDevelopment = true;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura CORS solo in ambiente di sviluppo
if (isDevelopment) {
  app.use(cors({
    origin:  ['http://localhost:3000', 'http://localhost:5173'],
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: '*',
  }));
  console.log('🔓 CORS abilitato per localhost:3000 e localhost:5173');
}

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);
app.use('/api/v1/extraServices', extraServices);
app.use('/api/v1/AllProductLines/Result', searchKB);
app.use('/api/v1/ContactReason', contactReasonRoute);
app.use('/api/v1/OperatingSystem', operatingSystemRoute);
app.use('/api/v1/Priority', priorityRoute);
app.use('/api/v1/Quadruple/ProductLine', quadrupleProductLineRoute);
app.use('/api/v1/Quadruple/Procedure', quadrupleProcedureRoute);
app.use('/api/v1/Quadruple/Area', quadrupleAreaRoute);
app.use('/api/v1/Quadruple/Module', quadrupleModuleRoute);
app.use('/api/v1/Program/Module', programModuleRoute);
app.use('/api/v1/Procedure/Module', procedureModuleRoute);
app.use('/api/v1/Ticket', ticketRoute);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
