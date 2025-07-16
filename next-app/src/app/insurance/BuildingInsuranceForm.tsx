'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Home, Shield, User, FileText } from 'lucide-react';

export default function BuildingInsuranceForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step}
          </div>
          {step < 4 && (
            <div
              className={`w-12 h-1 mx-2 ${
                step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalData = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Persönliche Daten
        </CardTitle>
        <CardDescription>
          Bitte geben Sie Ihre persönlichen Informationen ein.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="salutation">Anrede</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="herr">Herr</SelectItem>
                <SelectItem value="frau">Frau</SelectItem>
                <SelectItem value="divers">Divers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Titel (optional)</Label>
            <Input id="title" placeholder="Dr., Prof., etc." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Vorname *</Label>
            <Input id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nachname *</Label>
            <Input id="lastName" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthDate">Geburtsdatum *</Label>
          <Input id="birthDate" type="date" required />
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Kontaktdaten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse *</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefonnummer *</Label>
              <Input id="phone" type="tel" required />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Adresse</h3>
          <div className="space-y-2">
            <Label htmlFor="street">Straße und Hausnummer *</Label>
            <Input id="street" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode">PLZ *</Label>
              <Input id="zipCode" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="city">Ort *</Label>
              <Input id="city" required />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBuildingData = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Home className="h-5 w-5" />
          Gebäudedaten
        </CardTitle>
        <CardDescription>
          Informationen über das zu versichernde Gebäude.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Gebäudeadresse</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="sameAddress" />
            <Label htmlFor="sameAddress">
              Gebäudeadresse ist identisch mit meiner Adresse
            </Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="buildingStreet">Straße und Hausnummer *</Label>
            <Input id="buildingStreet" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="buildingZip">PLZ *</Label>
              <Input id="buildingZip" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="buildingCity">Ort *</Label>
              <Input id="buildingCity" required />
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="buildingYear">Baujahr *</Label>
            <Input
              id="buildingYear"
              type="number"
              min="1800"
              max="2024"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="livingSpace">Wohnfläche (m²) *</Label>
            <Input id="livingSpace" type="number" min="1" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="buildingType">Gebäudetyp *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="einfamilienhaus">Einfamilienhaus</SelectItem>
                <SelectItem value="zweifamilienhaus">
                  Zweifamilienhaus
                </SelectItem>
                <SelectItem value="mehrfamilienhaus">
                  Mehrfamilienhaus
                </SelectItem>
                <SelectItem value="reihenhaus">Reihenhaus</SelectItem>
                <SelectItem value="doppelhaus">Doppelhaushälfte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="constructionType">Bauweise *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="massiv">Massivbau</SelectItem>
                <SelectItem value="fertighaus">Fertighaus</SelectItem>
                <SelectItem value="holzbau">Holzbau</SelectItem>
                <SelectItem value="mischbau">Mischbauweise</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="roofType">Dachtyp *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ziegel">Ziegeldach</SelectItem>
                <SelectItem value="schiefer">Schieferdach</SelectItem>
                <SelectItem value="blech">Blechdach</SelectItem>
                <SelectItem value="flachdach">Flachdach</SelectItem>
                <SelectItem value="reet">Reetdach</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="floors">Anzahl Stockwerke *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Stockwerk</SelectItem>
                <SelectItem value="2">2 Stockwerke</SelectItem>
                <SelectItem value="3">3 Stockwerke</SelectItem>
                <SelectItem value="4+">4 oder mehr Stockwerke</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Zusätzliche Gebäudeteile</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="garage" />
              <Label htmlFor="garage">Garage</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="carport" />
              <Label htmlFor="carport">Carport</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="basement" />
              <Label htmlFor="basement">Keller</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="balcony" />
              <Label htmlFor="balcony">Balkon/Terrasse</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderInsuranceDetails = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Versicherungsdetails
        </CardTitle>
        <CardDescription>
          Wählen Sie Ihre gewünschten Versicherungsoptionen.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="insuranceSum">Versicherungssumme (€) *</Label>
          <Input
            id="insuranceSum"
            type="number"
            min="50000"
            step="1000"
            required
          />
          <p className="text-sm text-muted-foreground">
            Empfohlene Versicherungssumme basierend auf Wohnfläche: ca. 150.000
            €
          </p>
        </div>

        <div className="space-y-2">
          <Label>Selbstbeteiligung *</Label>
          <RadioGroup defaultValue="150">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0" id="deductible0" />
              <Label htmlFor="deductible0">0 € (höhere Prämie)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="150" id="deductible150" />
              <Label htmlFor="deductible150">150 € (empfohlen)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="500" id="deductible500" />
              <Label htmlFor="deductible500">500 € (niedrigere Prämie)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1000" id="deductible1000" />
              <Label htmlFor="deductible1000">
                1.000 € (niedrigste Prämie)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Zusätzliche Deckungen</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="elementarschaeden" />
                <Label htmlFor="elementarschaeden">Elementarschäden</Label>
              </div>
              <span className="text-sm text-muted-foreground">+15 €/Monat</span>
            </div>
            <p className="text-sm text-muted-foreground ml-6">
              Schutz vor Überschwemmung, Rückstau, Erdbeben, Erdrutsch
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="photovoltaik" />
                <Label htmlFor="photovoltaik">Photovoltaikanlage</Label>
              </div>
              <span className="text-sm text-muted-foreground">+8 €/Monat</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="glasbruch" />
                <Label htmlFor="glasbruch">Glasbruch</Label>
              </div>
              <span className="text-sm text-muted-foreground">+5 €/Monat</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="graffiti" />
                <Label htmlFor="graffiti">Graffiti-Schutz</Label>
              </div>
              <span className="text-sm text-muted-foreground">+3 €/Monat</span>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="startDate">Versicherungsbeginn *</Label>
          <Input id="startDate" type="date" required />
        </div>

        <div className="space-y-2">
          <Label>Zahlungsweise *</Label>
          <RadioGroup defaultValue="monthly">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monatlich</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quarterly" id="quarterly" />
              <Label htmlFor="quarterly">Vierteljährlich (2% Rabatt)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yearly" id="yearly" />
              <Label htmlFor="yearly">Jährlich (5% Rabatt)</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );

  const renderSummary = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Zusammenfassung & Abschluss
        </CardTitle>
        <CardDescription>
          Überprüfen Sie Ihre Angaben und schließen Sie die Versicherung ab.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">
            Ihr Versicherungsschutz
          </h3>
          <div className="space-y-1 text-sm text-blue-800">
            <p>Versicherungssumme: 150.000 €</p>
            <p>Selbstbeteiligung: 150 €</p>
            <p>Zusatzschutz: Elementarschäden, Glasbruch</p>
            <p className="font-medium pt-2">Monatlicher Beitrag: 28,50 €</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              Ich habe die{' '}
              <a href="#" className="text-blue-600 underline">
                Allgemeinen Versicherungsbedingungen
              </a>{' '}
              gelesen und akzeptiere diese. *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" required />
            <Label htmlFor="privacy" className="text-sm">
              Ich habe die{' '}
              <a href="#" className="text-blue-600 underline">
                Datenschutzerklärung
              </a>{' '}
              zur Kenntnis genommen. *
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label htmlFor="newsletter" className="text-sm">
              Ich möchte über neue Produkte und Angebote informiert werden.
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Anmerkungen (optional)</Label>
          <Textarea
            id="comments"
            placeholder="Haben Sie noch Fragen oder Anmerkungen zu Ihrer Versicherung?"
            rows={3}
          />
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Widerrufsrecht:</strong> Sie können Ihren
            Versicherungsvertrag innerhalb von 14 Tagen nach Vertragsabschluss
            ohne Angabe von Gründen widerrufen.
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gebäudeversicherung abschließen
          </h1>
          <p className="text-gray-600">
            Schützen Sie Ihr Zuhause mit unserem umfassenden Versicherungsschutz
          </p>
        </div>

        {renderStepIndicator()}

        <div className="mb-8">
          {currentStep === 1 && renderPersonalData()}
          {currentStep === 2 && renderBuildingData()}
          {currentStep === 3 && renderInsuranceDetails()}
          {currentStep === 4 && renderSummary()}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Zurück
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep}>Weiter</Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700">
              Versicherung abschließen
            </Button>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Bei Fragen erreichen Sie uns unter{' '}
            <a href="tel:0800123456" className="text-blue-600">
              0800 123 456
            </a>{' '}
            oder{' '}
            <a href="mailto:service@versicherung.de" className="text-blue-600">
              service@versicherung.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
