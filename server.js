import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import extraServices from './routes/extra-services.js';
import searchKB from './routes/search-kb.js';
import ticketFormTemplateRoute from './routes/ticket-form-template.js'
import contactReasonRoute from './routes/contact-reason.js';
import operatingSystemRoute from './routes/operating-system.js';
import priorityRoute from './routes/priority.js';
import quadrupleProductLineRoute from './routes/quadruple-product-line.js';
import quadrupleProcedureRoute from './routes/quadruple-procedure.js';
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
    origin: 'http://localhost:3000',  // Permetti solo richieste da localhost:3000
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: '*',
  }));
  console.log('🔓 CORS abilitato per localhost:3000');
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
app.use('/api/extraServices', extraServices);
app.use('/api/AllProductLines/Result', searchKB);
app.use('/api/Ticket/create/1/form', ticketFormTemplateRoute);
app.use('/api/v1/ContactReason', contactReasonRoute);
app.use('/api/v1/OperatingSystem', operatingSystemRoute);
app.use('/api/v1/Priority', priorityRoute);
app.use('/api/v1/Quadruple/ProductLine', quadrupleProductLineRoute);
app.use('/api/v1/Quadruple/Procedure', quadrupleProcedureRoute);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
