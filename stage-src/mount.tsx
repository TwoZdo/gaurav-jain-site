import { createRoot } from 'react-dom/client'
import '../../kit/stageshow.css'
import MoneyMarketed from './index'

// Mounts the framework demo into the static site wherever #framework-stage exists.
const el = document.getElementById('framework-stage')
if (el) createRoot(el).render(<MoneyMarketed />)
