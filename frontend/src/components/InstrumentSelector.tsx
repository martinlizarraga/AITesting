'use client';

interface InstrumentSelectorProps {
    selectedInstrument: string;
    onInstrumentChange: (instrument: string) => void;
}

const instruments = [
    { id: 'vocals', name: 'Vocals' },
    { id: 'guitar', name: 'Guitar' },
    { id: 'drums', name: 'Drums' },
    { id: 'bass', name: 'Bass' },
];

export default function InstrumentSelector({
    selectedInstrument,
    onInstrumentChange,
}: InstrumentSelectorProps) {
    return (
        <div className="w-full">
            <label
                htmlFor="instrument"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
                Select instrument to remove
            </label>
            <select
                id="instrument"
                value={selectedInstrument}
                onChange={(e) => onInstrumentChange(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100
                 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-600"
            >
                <option value="">Select an instrument</option>
                {instruments.map((instrument) => (
                    <option key={instrument.id} value={instrument.id}>
                        {instrument.name}
                    </option>
                ))}
            </select>
        </div>
    );
} 